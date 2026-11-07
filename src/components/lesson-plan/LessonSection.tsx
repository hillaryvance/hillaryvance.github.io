import type React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
type SectionProps = {
  title: string;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

export const Section = ({ title, subtitle, children }: SectionProps) => (
  <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="h6"
        component="h4"
        color="primary"
        sx={{ color: "text.primary" }}
      >
        {title}
      </Typography>
      {subtitle}
    </Box>
    <Divider sx={{ mb: 2 }} />
    {children}
  </Paper>
);

export const ChecklistSection = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      variant="subtitle1"
      component="h5"
      sx={{ fontWeight: "bold", color: "text.primary" }}
    >
      {heading}
    </Typography>
    <Typography variant="body2" sx={{ color: "text.primary" }}>
      {description}
    </Typography>
  </Box>
);
