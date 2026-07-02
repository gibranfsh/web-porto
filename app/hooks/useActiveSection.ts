"use client";

import { useEffect, useState } from "react";

export const NAV_SCROLL_OFFSET = 148;

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const checkActive = () => {
      const scrollPosition = window.scrollY + NAV_SCROLL_OFFSET + 4;
      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      if (atPageBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]!);
        return;
      }

      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    checkActive();
    window.addEventListener("scroll", checkActive, { passive: true });
    window.addEventListener("resize", checkActive);

    return () => {
      window.removeEventListener("scroll", checkActive);
      window.removeEventListener("resize", checkActive);
    };
  }, [sectionIds]);

  return activeSection;
}
