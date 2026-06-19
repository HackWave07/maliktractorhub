"use client";

import { useEffect } from "react";

export function useTiltMouse() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>("[data-tilt]");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
}
