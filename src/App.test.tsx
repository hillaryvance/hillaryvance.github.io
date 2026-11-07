import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { navigation } from "./data/portfolio";

vi.mock("./components/pdf-file", () => ({
  PdfFile: ({ title }: { title: string }) => (
    <div>{title} document preview</div>
  ),
}));

describe("portfolio navigation", () => {
  it("renders all sections, native links, and preserved lesson titles without observers", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const { container } = render(<App />);
    const nav = screen.getByRole("navigation", {
      name: "Main navigation",
      hidden: true,
    });
    for (const { id, label } of navigation) {
      expect(within(nav).getByText(label).closest("a")).toHaveAttribute(
        "href",
        `#${id}`,
      );
      expect(container.querySelector(`#${id}`)).toHaveClass("visible");
    }
    expect(
      screen.getByRole("heading", { level: 1, name: "Hello!" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Science Lesson" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Narrative Writing Revision" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Skip to content")).toHaveAttribute(
      "href",
      "#main-content",
    );
  });

  it("opens the drawer, selects a section, and closes it", async () => {
    render(<App />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(toggle);
    const mobile = screen.getByRole("navigation", {
      name: "Mobile navigation",
    });
    fireEvent.click(within(mobile).getByRole("link", { name: "Contact" }));
    await waitFor(() =>
      expect(
        screen.queryByRole("navigation", { name: "Mobile navigation" }),
      ).not.toBeInTheDocument(),
    );
    await waitFor(() =>
      expect(document.getElementById("contact")).toHaveFocus(),
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("selects a direct hash destination and updates the active item on scroll", async () => {
    window.history.replaceState(null, "", "#resume");
    const { container } = render(<App />);
    const nav = screen.getByRole("navigation", {
      name: "Main navigation",
      hidden: true,
    });
    expect(within(nav).getByText("Resume").closest("a")).toHaveAttribute(
      "aria-current",
      "location",
    );
    for (const { id } of navigation) {
      vi.spyOn(
        container.querySelector(`#${id}`)!,
        "getBoundingClientRect",
      ).mockReturnValue({ top: id === "contact" ? 500 : 0 } as DOMRect);
    }
    fireEvent.scroll(window);
    await waitFor(() =>
      expect(
        within(nav).getByText("Lesson Plans").closest("a"),
      ).toHaveAttribute("aria-current", "location"),
    );
    window.history.replaceState(null, "", "/");
  });
});

it("closes the mobile drawer with Escape and restores the menu button focus", async () => {
  render(<App />);
  const toggle = screen.getByRole("button", { name: "Open navigation" });
  toggle.focus();
  fireEvent.click(toggle);
  const nav = screen.getByRole("navigation", { name: "Mobile navigation" });
  fireEvent.keyDown(nav, { key: "Escape" });
  await waitFor(() => expect(toggle).toHaveFocus());
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});
