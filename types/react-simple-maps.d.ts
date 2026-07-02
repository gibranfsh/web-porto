declare module "react-simple-maps" {
  import type { CSSProperties, ReactNode, SVGProps } from "react";

  export type GeographyProps = {
    geography: unknown;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: CSSProperties;
      hover?: CSSProperties;
      pressed?: CSSProperties;
    };
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseMove?: (event: React.MouseEvent) => void;
    onMouseLeave?: () => void;
  };

  export function ComposableMap(props: SVGProps<SVGSVGElement> & {
    projection?: string;
    projectionConfig?: Record<string, number>;
    className?: string;
    width?: number;
    height?: number;
    children?: ReactNode;
  }): JSX.Element;

  export type ZoomMoveEvent = {
    coordinates: [number, number];
    zoom: number;
  };

  export function filterZoomEvent(event: WheelEvent | TouchEvent): boolean;

  export function ZoomableGroup(props: {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    filterZoomEvent?: (event: WheelEvent | TouchEvent) => boolean;
    onMoveStart?: (event: ZoomMoveEvent) => void;
    onMove?: (event: ZoomMoveEvent) => void;
    onMoveEnd?: (event: ZoomMoveEvent) => void;
    children?: ReactNode;
  }): JSX.Element;

  export function Geographies(props: {
    geography: string | object;
    children: (data: {
      geographies: Array<{
        rsmKey: string;
        id?: string | number;
        properties?: Record<string, string>;
      }>;
    }) => ReactNode;
  }): JSX.Element;

  export function Geography(props: GeographyProps): JSX.Element;
}
