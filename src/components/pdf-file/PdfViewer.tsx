import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Typography } from "@mui/material";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Parcel's npm: URL scheme emits the worker from the installed PDF.js version.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "npm:pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function PdfViewer({ fileUrl }: { fileUrl: string }) {
  return <ResponsiveDocument key={fileUrl} fileUrl={fileUrl} />;
}

function ResponsiveDocument({ fileUrl }: { fileUrl: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);
  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const measure = () =>
      setWidth(Math.max(0, Math.floor(element.getBoundingClientRect().width)));
    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <Box
      ref={container}
      sx={{
        width: "100%",
        minHeight: 100,
        "& .react-pdf__Page": {
          borderRadius: 3,
          overflow: "hidden",
          "& canvas": { borderRadius: "inherit" },
        },
      }}
    >
      {width > 0 && (
        <Document
          file={fileUrl}
          onLoadSuccess={({ numPages }) => setPages(numPages)}
          loading={<Typography role="status">Loading PDF…</Typography>}
          error={
            <Typography role="alert">
              The PDF could not load. Please use the document link below.
            </Typography>
          }
          noData={<Typography role="alert">No PDF was provided.</Typography>}
        >
          {Array.from({ length: pages }, (_, index) => (
            <Page
              key={index + 1}
              pageNumber={index + 1}
              width={width}
              loading={
                <Typography role="status">Loading page {index + 1}…</Typography>
              }
              error={
                <Typography role="alert">
                  This page could not be rendered.
                </Typography>
              }
            />
          ))}
        </Document>
      )}
    </Box>
  );
}
