import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Box, Link, Typography } from "@mui/material";

const PdfViewer = lazy(() => import("./PdfViewer"));

class PdfBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <Typography role="alert">
        The preview could not load. Please open the PDF below.
      </Typography>
    ) : (
      this.props.children
    );
  }
}

export function PdfFile({
  fileUrl,
  title = "Document",
}: {
  fileUrl: string;
  title?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setReady(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <Box
      ref={ref}
      sx={{ width: "100%", maxWidth: 850, minWidth: 0, textAlign: "center" }}
    >
      <PdfBoundary key={fileUrl}>
        {ready ? (
          <Suspense
            fallback={
              <Typography role="status">Loading PDF preview…</Typography>
            }
          >
            <PdfViewer fileUrl={fileUrl} />
          </Suspense>
        ) : (
          <Typography>
            PDF preview loads as you approach this section.
          </Typography>
        )}
      </PdfBoundary>
      <Link
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: "inline-block", mt: 2 }}
      >
        Open {title} PDF (new tab)
      </Link>
    </Box>
  );
}
