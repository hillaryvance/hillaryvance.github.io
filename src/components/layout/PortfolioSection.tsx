import { useEffect, useRef, useState, type ReactNode } from "react";
import { Box, useMediaQuery } from "@mui/material";
import type { SectionId } from "../../data/portfolio";

export function PortfolioSection({
  id,
  children,
}: {
  id: SectionId;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const canObserve = typeof IntersectionObserver !== "undefined";
  useEffect(() => {
    if (reducedMotion || !canObserve || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [reducedMotion, canObserve]);
  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      tabIndex={-1}
      className={
        visible || reducedMotion || !canObserve
          ? "portfolio-section visible"
          : "portfolio-section"
      }
    >
      {children}
    </Box>
  );
}
