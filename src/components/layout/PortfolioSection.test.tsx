import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { PortfolioSection } from "./PortfolioSection";

it("shows content immediately with reduced motion and does not observe it", () => {
  const observe = vi.fn();
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(() => ({ observe, disconnect: vi.fn() })),
  );
  vi.spyOn(window, "matchMedia").mockImplementation(
    (query) =>
      ({
        matches: query.includes("prefers-reduced-motion"),
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }) as unknown as MediaQueryList,
  );
  const { container } = render(
    <PortfolioSection id="about-me">Accessible content</PortfolioSection>,
  );
  expect(container.querySelector("section")).toHaveClass("visible");
  expect(screen.getByText("Accessible content")).toBeInTheDocument();
  expect(observe).not.toHaveBeenCalled();
});
