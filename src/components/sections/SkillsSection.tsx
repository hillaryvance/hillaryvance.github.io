import type React from "react";
import { Box, Stack, Grow, Chip, useMediaQuery } from "@mui/material";
import { skills } from "../../data/portfolio";
import { alpha } from "@mui/material/styles";
import { colors } from "../../theme";
export const SkillsSection: React.FC = () => {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            timeout={reducedMotion ? 0 : 1000 + index * 100}
            key={skill}
          >
            <Chip
              label={skill}
              sx={{
                backgroundColor: alpha("#fff", 0.24),
                backdropFilter: "blur(8px)",
                border: "1px solid",
                borderColor: alpha("#fff", 0.65),
                boxShadow: `0 4px 12px ${alpha(colors.ink, 0.1)}, inset 0 1px 0 ${alpha("#fff", 0.5)}`,
                color: colors.ink,
                cursor: "default",
                userSelect: "none",
                fontWeight: "bold",
                fontSize: "16px",
                padding: "8px 16px",
                transition:
                  "background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease, translate 200ms ease",
                "&:hover": {
                  backgroundColor: alpha("#fff", 0.42),
                  borderColor: alpha("#243b3a", 0.65),
                  boxShadow: `0 7px 18px ${alpha(colors.ink, 0.16)}, inset 0 1px 0 ${alpha("#fff", 0.7)}`,
                  translate: reducedMotion ? "none" : "0 -2px",
                },
              }}
            />
          </Grow>
        ))}
      </Stack>
    </Box>
  );
};
