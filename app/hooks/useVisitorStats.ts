"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EMPTY_VISITOR_STATS, type VisitorStats } from "../lib/visitors/types";

const POLL_MS = 90_000;

async function fetchVisitorStats(): Promise<VisitorStats> {
  const response = await fetch("/api/visitors");
  if (!response.ok) return EMPTY_VISITOR_STATS;
  return response.json() as Promise<VisitorStats>;
}

export function useVisitorStats() {
  const [stats, setStats] = useState<VisitorStats>(EMPTY_VISITOR_STATS);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const refetch = useCallback(async () => {
    try {
      const data = await fetchVisitorStats();
      setStats(data);
    } catch {
      setStats(EMPTY_VISITOR_STATS);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refetch();

    const startPolling = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        if (document.hidden) return;
        void refetch();
      }, POLL_MS);
    };

    const stopPolling = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stopPolling();
      } else {
        void refetch();
        startPolling();
      }
    };

    startPolling();
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stopPolling();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [refetch]);

  return { stats, loading, refetch };
}
