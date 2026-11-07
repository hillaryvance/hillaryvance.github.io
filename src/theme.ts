import { createTheme } from "@mui/material/styles";

export const colors = {
  background: "#f3d4d5",
  ink: "#36454f",
  coral: "#FF6B6B",
  teal: "#4ECDC4",
  blue: "#45B7D1",
  sage: "#96CEB4",
  yellow: "#FFEAA7",
  lavender: "#DDA0DD",
} as const;
export const teacherFont = 'Teacher, "Segoe UI", sans-serif';
export const theme = createTheme({
  palette: {
    primary: { main: "#227f79" },
    background: { default: colors.background, paper: "#fff" },
    text: { primary: colors.ink },
  },
  typography: {
    h1: { fontFamily: "Baltiholm, Georgia, serif" },
    h2: { fontFamily: teacherFont, fontSize: "clamp(2rem, 5vw, 3.75rem)" },
    h3: { fontFamily: teacherFont, fontSize: "clamp(1.75rem, 4vw, 3rem)" },
  },
  components: {
    MuiPaper: { styleOverrides: { rounded: { borderRadius: 12 } } },
    MuiCssBaseline: {
      styleOverrides: {
        ":root": { "--header-height": "56px", "--section-offset": "192px" },
        "@media (min-width:600px)": {
          ":root": { "--header-height": "64px", "--section-offset": "200px" },
        },
      },
    },
  },
});
export const sectionLayout = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mt: "90px",
  px: { xs: 2, sm: 4 },
  py: 4,
  width: "100%",
} as const;
export const sectionStack = {
  width: "100%",
  maxWidth: "1200px",
  minWidth: 0,
} as const;
export const sectionHeading = (accent: string) => ({
  textDecoration: "underline",
  textDecorationColor: accent,
});
