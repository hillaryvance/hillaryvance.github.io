import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, colors } from "./theme";
import { PortfolioLayout } from "./components/layout/PortfolioLayout";
import { AboutSection } from "./components/sections/AboutSection";
import { PhilosophySection } from "./components/sections/PhilosophySection";
import { DocumentSection } from "./components/sections/DocumentSection";
import { LessonsSection } from "./components/sections/LessonsSection";
import { ContactSection } from "./components/sections/ContactSection";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PortfolioLayout>
        <AboutSection />
        <PhilosophySection />
        <DocumentSection
          id="resume"
          title="Resume"
          accent={colors.teal}
          fileUrl={new URL("../assets/RESUME.pdf", import.meta.url).toString()}
        />
        <DocumentSection
          id="recommendations"
          title="Recommendations"
          accent={colors.sage}
          fileUrl={new URL(
            "../assets/Hillary Vance Recommendation Letter.pdf",
            import.meta.url,
          ).toString()}
        />
        <LessonsSection />
        <ContactSection />
      </PortfolioLayout>
    </ThemeProvider>
  );
}
