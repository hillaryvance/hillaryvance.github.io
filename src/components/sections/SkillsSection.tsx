import type React from "react";
import { Box, Stack, Grow, Chip, useMediaQuery } from "@mui/material";
import { skills } from "../../data/portfolio";
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
                backgroundColor: colors.teal,
                color: "#243b3a",
                fontWeight: "bold",
                fontSize: "16px",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: colors.blue,
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            />
          </Grow>
        ))}
      </Stack>
    </Box>
  );
};
