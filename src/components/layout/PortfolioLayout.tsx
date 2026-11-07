import { useRef, useState, type ReactNode } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navigation, type SectionId } from "../../data/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";
import { colors, teacherFont } from "../../theme";
import { FiestaBanner } from "./FiestaBanner";

export function PortfolioLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pendingFocus = useRef<SectionId | null>(null);
  const [active, setActive] = useActiveSection();
  const desktop = useMediaQuery("(min-width:1200px)");
  const select = (id: SectionId) => {
    setActive(id);
    setMobileOpen(false);
    if (mobileOpen) pendingFocus.current = id;
    else document.getElementById(id)?.focus({ preventScroll: true });
  };
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AppBar
        component="header"
        sx={{ backgroundColor: colors.background, color: "text.primary" }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <IconButton
            color="inherit"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-controls={mobileOpen ? "mobile-navigation" : undefined}
            onClick={() => setMobileOpen(true)}
            sx={{ display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{
              fontFamily: teacherFont,
              fontSize: { xs: 26, sm: 34 },
              flexGrow: 1,
            }}
          >
            Ms. Hillary Vance
          </Typography>
          <Box
            component="nav"
            aria-label="Main navigation"
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            {navigation.map(({ id, label }) => (
              <Button
                key={id}
                href={`#${id}`}
                onClick={() => select(id)}
                aria-current={active === id ? "location" : undefined}
                sx={{
                  fontFamily: teacherFont,
                  fontSize: 22,
                  color: "text.primary",
                  textTransform: "none",
                  borderRadius: 0,
                  borderBottom: "3px solid",
                  borderColor: active === id ? colors.coral : "transparent",
                  "&:hover": { borderColor: colors.coral },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={mobileOpen && !desktop}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          transition: {
            onExited: () => {
              if (pendingFocus.current) {
                document
                  .getElementById(pendingFocus.current)
                  ?.focus({ preventScroll: true });
                pendingFocus.current = null;
              }
            },
          },
        }}
        sx={{ "& .MuiDrawer-paper": { width: 260, maxWidth: "90vw" } }}
      >
        <Box
          component="nav"
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <Typography sx={{ m: 2, fontFamily: teacherFont, fontSize: 26 }}>
            Ms. Hillary Vance
          </Typography>
          <Divider />
          <List>
            {navigation.map(({ id, label }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${id}`}
                  selected={active === id}
                  aria-current={active === id ? "location" : undefined}
                  onClick={() => select(id)}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        sx={{
          position: "fixed",
          // Tuck the cord anchors beneath the app bar so the swags hang from its edge.
          top: "calc(var(--header-height) - 6px)",
          width: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <FiestaBanner />
      </Box>
      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{ pt: "var(--header-height)", width: "100%" }}
      >
        {children}
      </Box>
    </>
  );
}
