"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  filterZoomEvent,
} from "react-simple-maps";
import {
  HandRaisedIcon,
  MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import type { VisitorStats } from "../../lib/visitors/types";

countries.registerLocale(enLocale);

const GEO_URL = "/data/world-countries.json";

const IDLE_FILL = "rgba(63, 63, 70, 0.55)";
const IDLE_STROKE = "rgba(113, 113, 122, 0.5)";
const MAX_ZOOM = 2;

type VisitorWorldMapProps = {
  readonly stats: VisitorStats;
  readonly compact?: boolean;
};

type TooltipState = {
  name: string;
  count: number;
  x: number;
  y: number;
} | null;

type MapPosition = {
  coordinates: [number, number];
  zoom: number;
};

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

function resolveCountryCode(geo: {
  properties?: Record<string, string>;
  id?: string | number;
}): string | null {
  const props = geo.properties ?? {};
  const fromProps =
    props.ISO_A2 ?? props.iso_a2 ?? props.ISO_A2_EH ?? props.ISO_A3;
  if (fromProps && fromProps !== "-99") {
    const alpha2 = fromProps.length === 2 ? fromProps : countries.alpha3ToAlpha2(fromProps);
    if (alpha2) return alpha2.toUpperCase();
  }

  if (geo.id !== undefined && geo.id !== null) {
    const numeric = String(geo.id).padStart(3, "0");
    const alpha2 = countries.numericToAlpha2(numeric) ?? countries.numericToAlpha2(String(geo.id));
    if (alpha2) return alpha2.toUpperCase();
  }

  return null;
}

function getInitialZoom(compact: boolean): number {
  return compact ? 0.9 : 1;
}

function getProjectionScale(compact: boolean): number {
  return compact ? 110 : 120;
}

function VisitorWorldMap({ stats, compact = false }: VisitorWorldMapProps) {
  const initialZoom = getInitialZoom(compact);
  const [tooltip, setTooltip] = useState<TooltipState>(null);
  const [geoData, setGeoData] = useState<object | null>(null);
  const [geoError, setGeoError] = useState(false);
  const [geoLoading, setGeoLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
    zoom: initialZoom,
  });

  const mapWidth = compact ? 360 : 380;
  const mapHeight = compact ? 140 : 160;
  const projectionScale = getProjectionScale(compact);

  useEffect(() => {
    let cancelled = false;

    fetch(GEO_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load map data");
        return response.json();
      })
      .then((data) => {
        if (!cancelled) {
          setGeoData(data);
          setGeoError(false);
        }
      })
      .catch(() => {
        if (!cancelled) setGeoError(true);
      })
      .finally(() => {
        if (!cancelled) setGeoLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleMoveEnd = useCallback((event: MapPosition) => {
    setPosition(event);
    setIsDragging(false);
  }, []);

  const handlePointerDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const maxCount = useMemo(() => {
    const values = Object.values(stats.byCountry);
    return values.length > 0 ? Math.max(...values) : 0;
  }, [stats.byCountry]);

  const topCountries = useMemo(() => {
    return Object.entries(stats.byCountry)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  }, [stats.byCountry]);

  const tableRows = useMemo(() => {
    return Object.entries(stats.byCountry).sort(([, a], [, b]) => b - a);
  }, [stats.byCountry]);

  return (
    <div
      className={`visitor-map-cyber w-full ${compact ? "visitor-map-cyber-compact" : ""}`}
    >
      <div className="flex flex-wrap justify-between items-center gap-x-2 gap-y-1 mb-2">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-red-400/90">
          {"// Global Reach"}
        </p>
        <div className="visitor-map-hint flex items-center gap-2 font-mono text-[10px] text-zinc-500 shrink-0">
          <span className="inline-flex items-center gap-1">
            <HandRaisedIcon
              className="h-3.5 w-3.5 text-zinc-500/80"
              aria-hidden
            />
            <span className="hidden sm:inline">Drag to move</span>
            <span className="sr-only sm:hidden">Drag to move</span>
          </span>
          <span className="text-zinc-600" aria-hidden>
            ·
          </span>
          <span className="inline-flex items-center gap-1">
            <MagnifyingGlassPlusIcon
              className="h-3.5 w-3.5 text-zinc-500/80"
              aria-hidden
            />
            <span className="hidden sm:inline">Scroll to zoom</span>
            <span className="sr-only sm:hidden">Scroll to zoom</span>
          </span>
        </div>
      </div>

      <div
        className="visitor-map-frame visitor-map-interactive relative flex items-center justify-center"
        role="img"
        aria-label="World map showing visitor countries by visit count. Drag to move the map. Scroll to zoom."
        data-dragging={isDragging ? "true" : undefined}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {geoLoading && (
          <p className="font-mono text-xs text-zinc-500 absolute inset-0 flex items-center justify-center">
            Loading map…
          </p>
        )}

        {geoError && (
          <p className="font-mono text-xs text-zinc-500 absolute inset-0 flex items-center justify-center px-4 text-center">
            Map unavailable
          </p>
        )}

        {!geoLoading && !geoError && geoData && (
          <ComposableMap
            width={mapWidth}
            height={mapHeight}
            projection="geoEqualEarth"
            projectionConfig={{
              scale: projectionScale,
            }}
            className="w-full h-auto max-w-full"
          >
            <ZoomableGroup
              center={position.coordinates}
              zoom={position.zoom}
              minZoom={initialZoom}
              maxZoom={MAX_ZOOM}
              filterZoomEvent={filterZoomEvent}
              onMoveStart={() => setIsDragging(true)}
              onMoveEnd={handleMoveEnd}
            >
              <Geographies geography={geoData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const code = resolveCountryCode(geo);
                    const count = code ? (stats.byCountry[code] ?? 0) : 0;
                    const opacity =
                      count > 0 && maxCount > 0
                        ? 0.25 + (count / maxCount) * 0.7
                        : 0;

                    const displayName =
                      (code && regionNames.of(code)) ||
                      geo.properties?.name ||
                      code ||
                      "Unknown";

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          count > 0
                            ? `rgba(220, 38, 38, ${Math.max(opacity, 0.35)})`
                            : IDLE_FILL
                        }
                        stroke={IDLE_STROKE}
                        strokeWidth={0.4}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            outline: "none",
                            fill:
                              count > 0
                                ? "rgba(239, 68, 68, 0.85)"
                                : "rgba(82, 82, 91, 0.75)",
                            cursor: count > 0 ? "pointer" : "default",
                          },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={(event) => {
                          if (count <= 0) return;
                          setTooltip({
                            name: displayName,
                            count,
                            x: event.clientX,
                            y: event.clientY,
                          });
                        }}
                        onMouseMove={(event) => {
                          if (count <= 0) return;
                          setTooltip((prev) =>
                            prev
                              ? { ...prev, x: event.clientX, y: event.clientY }
                              : null
                          );
                        }}
                        onMouseLeave={() => setTooltip(null)}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        )}

        {tooltip && (
          <div
            className="visitor-map-tooltip pointer-events-none fixed z-50"
            style={{
              left: tooltip.x + 12,
              top: tooltip.y + 12,
            }}
          >
            <span className="font-mono text-xs text-white">{tooltip.name}</span>
            <span className="font-mono text-xs text-red-400 ml-2 tabular-nums">
              {tooltip.count}
            </span>
          </div>
        )}
      </div>

      {stats.countryCount === 0 && !geoLoading && !geoError && (
        <p className="font-mono text-[10px] sm:text-xs text-zinc-500 mt-2 text-center">
          Waiting for first visitors…
        </p>
      )}

      {topCountries.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2 justify-center">
          {topCountries.map(([code, count]) => (
            <span key={code} className="experience-tech-chip">
              {code} {count}
            </span>
          ))}
        </div>
      )}

      <table className="sr-only">
        <caption>Visitor counts by country</caption>
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Visits</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map(([code, count]) => (
            <tr key={code}>
              <td>{regionNames.of(code) ?? code}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(VisitorWorldMap);
