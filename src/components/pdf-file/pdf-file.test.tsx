import { act, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { PdfFile } from "./pdf-file";

vi.mock("./PdfViewer", () => ({
  default: ({ fileUrl }: { fileUrl: string }) => {
    if (fileUrl === "broken.pdf") throw new Error("Preview failed");
    return <div>Preview: {fileUrl}</div>;
  },
}));

it("defers the renderer until nearby while always offering the direct document link", async () => {
  let intersect: IntersectionObserverCallback = () => {};
  const disconnect = vi.fn();
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(callback: IntersectionObserverCallback) {
        intersect = callback;
      }
      observe() {}
      disconnect = disconnect;
    },
  );
  const { rerender } = render(<PdfFile fileUrl="resume.pdf" title="Resume" />);
  expect(screen.getByRole("link", { name: /Open Resume PDF/ })).toHaveAttribute(
    "href",
    "resume.pdf",
  );
  expect(screen.queryByText("Preview: resume.pdf")).not.toBeInTheDocument();
  await act(async () =>
    intersect(
      [{ isIntersecting: true }] as IntersectionObserverEntry[],
      {} as IntersectionObserver,
    ),
  );
  expect(await screen.findByText("Preview: resume.pdf")).toBeInTheDocument();
  expect(disconnect).toHaveBeenCalled();
  rerender(<PdfFile fileUrl="new.pdf" title="Resume" />);
  expect(await screen.findByText("Preview: new.pdf")).toBeInTheDocument();
});

it("retains the document link if the lazy viewer fails", async () => {
  vi.stubGlobal("IntersectionObserver", undefined);
  vi.spyOn(console, "error").mockImplementation(() => {});
  render(<PdfFile fileUrl="broken.pdf" title="Resume" />);
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "The preview could not load",
  );
  expect(screen.getByRole("link", { name: /Open Resume PDF/ })).toHaveAttribute(
    "href",
    "broken.pdf",
  );
});
