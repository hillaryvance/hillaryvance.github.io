import { Box, Stack, Typography, Paper } from "@mui/material";
import { colors, sectionHeading, sectionLayout } from "../../theme";
import { PortfolioSection } from "../layout/PortfolioSection";
export function PhilosophySection() {
  return (
    <PortfolioSection id="philosophy">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"

        sx={sectionLayout}
      >
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h2"
            align="center"
            sx={{
              ...sectionHeading(colors.coral),
            }}
          >
            Teaching Philosophy
          </Typography>
          <Paper
            elevation={8}
            sx={{
              p: 2,
              backgroundColor: "#fff",
              borderRadius: 3,
              maxWidth: "90%",
              "&:hover": {
                transform: "scale(1.02)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <Box
              component="img"
              sx={{
                display: "block",
                borderRadius: 2,
                width: "100%",
                height: "auto",
                maxWidth: "800px",
              }}
              alt="Teaching Philosophy"
              src={new URL(
                "../../../assets/teaching-philosophy.png",
                import.meta.url,
              ).toString()}
            />
          </Paper>
        </Stack>
      </Box>
    </PortfolioSection>
  );
}
