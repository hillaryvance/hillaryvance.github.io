import { Box, Paper, Stack, Typography } from "@mui/material";
import { PortfolioSection } from "../layout/PortfolioSection";
import { PdfFile } from "../pdf-file";
import { sectionHeading, sectionLayout, sectionStack } from "../../theme";

type DocumentSectionProps = {
  id: "resume" | "recommendations";
  title: string;
  fileUrl: string;
  accent: string;
};
export function DocumentSection({
  id,
  title,
  fileUrl,
  accent,
}: DocumentSectionProps) {
  return (
    <PortfolioSection id={id}>
      <Box
        sx={{
          ...sectionLayout,
          minHeight: "calc(100vh - var(--header-height))",
        }}
      >
        <Stack spacing={4} alignItems="center" sx={sectionStack}>
          <Typography variant="h2" align="center" sx={sectionHeading(accent)}>
            {title}
          </Typography>
          <Paper
            elevation={8}
            sx={{
              p: 2,
              borderRadius: 3,
              width: "100%",
              maxWidth: 850,
              overflow: "hidden",
            }}
          >
            <PdfFile fileUrl={fileUrl} title={title} />
          </Paper>
        </Stack>
      </Box>
    </PortfolioSection>
  );
}
