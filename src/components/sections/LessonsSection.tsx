import { Box, Stack, Typography } from "@mui/material";
import {
  NarrativeWritingLesson,
  ScienceLesson,
} from "../lesson-plan/lesson-plan";
import { PortfolioSection } from "../layout/PortfolioSection";
import {
  colors,
  sectionHeading,
  sectionLayout,
  sectionStack,
} from "../../theme";

export function LessonsSection() {
  return (
    <PortfolioSection id="lesson-plans">
      <Box sx={sectionLayout}>
        <Stack spacing={4} alignItems="center" sx={sectionStack}>
          <Typography
            variant="h2"
            align="center"
            sx={sectionHeading(colors.yellow)}
          >
            Lesson Plans
          </Typography>
          <Box sx={{ width: "100%" }}>
            <NarrativeWritingLesson />
          </Box>
          <Box sx={{ width: "100%" }}>
            <ScienceLesson />
          </Box>
        </Stack>
      </Box>
    </PortfolioSection>
  );
}
