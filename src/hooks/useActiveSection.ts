import { useEffect, useState } from "react";
import { navigation, type SectionId } from "../data/portfolio";

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("about-me");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const offset =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--section-offset",
          ),
        ) || 200;
      let next: SectionId = "about-me";
      for (const { id } of navigation) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= offset + 1)
          next = id;
      }
      setActive(next);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onHash = () => {
      const item = navigation.find(
        ({ id }) => `#${id}` === window.location.hash,
      );
      if (item) {
        setActive(item.id);
        document.getElementById(item.id)?.scrollIntoView?.();
      }
    };
    update();
    onHash();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onHash);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);
  return [active, setActive] as const;
}
