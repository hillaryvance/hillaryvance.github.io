import { useState } from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import PdfViewer from "./PdfViewer";

vi.mock("react-pdf", () => ({
  pdfjs: { GlobalWorkerOptions: {} },
  Document: ({
    file,
    children,
    onLoadSuccess,
    error,
    loading,
  }: {
    file: string;
    children: React.ReactNode;
    onLoadSuccess: (result: { numPages: number }) => void;
    error: React.ReactNode;
    loading: React.ReactNode;
  }) => {
    const [state, setState] = useState("loading");
    return (
      <div data-testid="document" data-file={file}>
        {state === "loading" && loading}
        {state === "error" && error}
        <button
          onClick={() => {
            setState("loaded");
            onLoadSuccess({ numPages: 2 });
          }}
        >
          Load document
        </button>
        <button onClick={() => setState("error")}>Fail document</button>
        {state === "loaded" && children}
      </div>
    );
  },
  Page: ({ pageNumber, width }: { pageNumber: number; width: number }) => (
    <div data-testid="page" data-width={width}>
      Page {pageNumber}
    </div>
  ),
}));

it("renders pages at container width and resets pages when the file changes", () => {
  let width = 420;
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
    () => ({ width }) as DOMRect,
  );
  let resize: () => void = () => {};
  const disconnect = vi.fn();
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        resize = callback;
      }
      observe() {}
      disconnect = disconnect;
    },
  );
  const { rerender, unmount } = render(<PdfViewer fileUrl="first.pdf" />);
  expect(screen.getByRole("status")).toHaveTextContent("Loading PDF");
  fireEvent.click(screen.getByRole("button", { name: "Fail document" }));
  expect(screen.getByRole("alert")).toHaveTextContent(
    "Please use the document link",
  );
  fireEvent.click(screen.getByRole("button", { name: "Load document" }));
  expect(screen.getAllByTestId("page")).toHaveLength(2);
  expect(screen.getAllByTestId("page")[0]).toHaveAttribute("data-width", "420");
  width = 280;
  act(() => resize());
  expect(screen.getAllByTestId("page")[0]).toHaveAttribute("data-width", "280");
  rerender(<PdfViewer fileUrl="second.pdf" />);
  expect(screen.getByTestId("document")).toHaveAttribute(
    "data-file",
    "second.pdf",
  );
  expect(screen.queryAllByTestId("page")).toHaveLength(0);
  unmount();
  expect(disconnect).toHaveBeenCalled();
});
