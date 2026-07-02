"use client";

import { useEffect, useRef } from "react";

type VisitorTrackerProps = {
  readonly onRecorded?: () => void;
};

export default function VisitorTracker({ onRecorded }: VisitorTrackerProps) {
  const sentRef = useRef(false);

  useEffect(() => {
    if (sentRef.current) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("visit_recorded") === "1") return;

    sentRef.current = true;

    fetch("/api/visit", { method: "POST" })
      .then((response) => {
        if (response.ok || response.status === 204) {
          sessionStorage.setItem("visit_recorded", "1");
          onRecorded?.();
        }
      })
      .catch(() => {
        sentRef.current = false;
      });
  }, [onRecorded]);

  return null;
}
