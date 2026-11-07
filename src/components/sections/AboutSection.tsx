import { Box, Stack, Typography, Paper } from "@mui/material";
import { biography } from "../../data/portfolio";
import { SkillsSection } from "./SkillsSection";
import { colors, sectionLayout } from "../../theme";
import { PortfolioSection } from "../layout/PortfolioSection";
export function AboutSection() {
  return (
    <PortfolioSection id="about-me">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - var(--header-height))"
        sx={sectionLayout}
      >
        <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            fontFamily="Baltiholm, Georgia, serif"
            align="center"
            sx={{
              background: `linear-gradient(45deg, ${colors.coral} 30%, ${colors.teal} 90%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            }}
          >
            Hello!
          </Typography>
          <SkillsSection />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
            sx={{ width: "100%", maxWidth: "1200px" }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ maxWidth: "100%", minWidth: 0 }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 2,
                  maxWidth: "100%",
                  backgroundColor: "#fff",
                  borderRadius: 3,
                  transform: "rotate(-2deg)",
                  "&:hover": {
                    transform: "rotate(0deg) scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    maxHeight: 330,
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                    borderRadius: 2,
                  }}
                  alt="Hillary Vance"
                  src={new URL(
                    "../../../assets/hillary-vance.jpeg",
                    import.meta.url,
                  ).toString()}
                />
              </Paper>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Stack
                direction="column"
                spacing={2}
                textAlign="left"
                sx={{ maxWidth: "900px" }}
              >
                {biography.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    variant="body1"
                    sx={{ fontSize: 20, lineHeight: 1.6 }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </PortfolioSection>
  );
}
