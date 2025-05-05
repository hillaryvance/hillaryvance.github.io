import "./App.css";
import React, { useEffect, useRef } from "react";
import { PdfFile } from "./components/pdf-file";
import Scroll from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  NarrativeWritingLesson,
  ScienceLesson,
} from "./components/lesson-plan/lesson-plan";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactNode;
}

const RainbowUnit: React.FC<{ xOffset: number }> = ({ xOffset }) => (
  <g transform={`translate(${xOffset}, 0) rotate(180, ${50 + xOffset}, 75)`}>
    <path
      d="M60 150 C 85 110, 115 110, 140 150"
      stroke="#A8A8A8"
      strokeWidth="10"
      fill="none"
    />
    <g fill="none" stroke="#FFFFFF" strokeWidth="2">
      <path d="M50 150 C 75 100, 125 100, 150 150" strokeDasharray="5,5" />
      <path d="M55 150 C 80 105, 120 105, 145 150" strokeDasharray="1,10" />
      <path d="M60 150 C 85 110, 115 110, 140 150" strokeDasharray="2,2" />
    </g>
  </g>
);

const RainbowBanner: React.FC = () => {
  const unitCount = 30;
  const unitWidth = 50;
  const totalWidth = unitCount * unitWidth;

  return (
    <svg
      width="100%"
      height="100"
      viewBox={`0 0 ${totalWidth} 100`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }} // removes inline spacing
    >
      {Array.from({ length: unitCount }).map((_, i) => (
        <RainbowUnit key={i} xOffset={i * unitWidth} />
      ))}
    </svg>
  );
};

function MenuBar(props: Props) {
  const drawerWidth = 240;
  const navItems = [
    "about-me",
    "philosophy",
    "resume",
    "recommendations",
    "lesson-plans",
    "contact",
  ];

  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>("about-me");
  const [hovered, setHovered] = React.useState<Boolean | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Ms. Hillary Vance
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const buttonLine = {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#36454f",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#f3d4d5", color: "#36454f" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              fontWeight: "normal",
              fontFamily: "Teacher",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Ms. Hillary Vance
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Scroll.Button}
                to={item}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={() => setSelected(item)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  fontFamily: "Teacher",
                  fontSize: "22px",
                  color: "#36454f",
                  position: "relative",
                  "&:hover": {
                    "&::after": buttonLine,
                  },
                  "&::after": !hovered && selected === item ? buttonLine : {},
                }}
              >
                {item.split("-").join(" ")}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        sx={{
          position: "fixed", // Fix the banner at the top
          top: "64px", // Place below the AppBar (adjust as necessary)
          width: "100%",
          zIndex: 1,
        }}
      >
        <RainbowBanner />
      </Box>
      <Box component="main" sx={{ backgroundColor: "#f3d4d5" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

function App() {
  return (
    <MenuBar>
      <Box
        id="about-me"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
      >
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h1"
            fontFamily="Baltiholm"
            align="center"
            sx={{ marginBottom: 2 }}
          >
            Hello!
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            paddingLeft="10%"
            paddingRight="10%"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                sx={{
                  maxHeight: 350,
                  display: "inline-block",
                  boxShadow: 3,
                  border: "1px solid white",
                  borderRadius: 1,
                  padding: 1,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    maxHeight: 330,
                    maxWidth: 290,
                    borderRadius: 1,
                  }}
                  alt="Hillary Vance"
                  src={new URL(
                    "../assets/hillary-vance.jpeg",
                    import.meta.url
                  ).toString()}
                />
              </Box>
            </Box>
            <Box>
              <Stack
                direction="column"
                spacing={1}
                textAlign="justify"
                paddingTop="2%"
                paddingBottom="1%"
              >
                <Typography
                  variant="body1"
                  fontFamily="Teacher"
                  sx={{ fontSize: "22px", paddingBottom: "0.25%" }}
                >
                  I am proud to be on this journey as an educator with deep
                  roots in the Snoqualmie Valley.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="Teacher"
                  sx={{ fontSize: "22px", paddingBottom: "0.25%" }}
                >
                  I was born and raised in the beautiful Snoqualmie Valley,
                  attending Fall City Elementary and later graduating from Mount
                  Si High School in 2009.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="Teacher"
                  sx={{ fontSize: "22px", paddingBottom: "0.25%" }}
                >
                  My passion for understanding people led me to Central
                  Washington University, where I earned my bachelor's degree in
                  Psychology.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="Teacher"
                  sx={{ fontSize: "22px", paddingBottom: "0.25%" }}
                >
                  My love for teaching led me to pursue my Master's in
                  Elementary Education from Western Governors University.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="Teacher"
                  sx={{ fontSize: "22px", paddingBottom: "0.25%" }}
                >
                  As part of my journey, I completed my student teaching in the
                  Lake Washington School District, where I gained invaluable
                  hands-on experience working with students and fostering a
                  positive learning environment.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="Teacher"
                  sx={{ fontSize: "22px", paddingBottom: "0.25%" }}
                >
                  That experience reinforced my belief in creating engaging,
                  supportive, and inclusive classrooms where every student can
                  thrive.
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="Teacher"
                  sx={{ fontSize: "22px" }}
                >
                  I'm so excited to continue growing as an educator and making a
                  meaningful impact in the lives of my students!
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box
        id="philosophy"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
      >
        <Box
          component="img"
          sx={{
            display: "block",
            borderRadius: 1,
          }}
          alt="Teaching Philosophy"
          src={new URL(
            "../assets/teaching-philosophy.png",
            import.meta.url
          ).toString()}
        />
      </Box>
      <Box
        id="resume"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
      >
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h2"
            align="center"
            sx={{ fontFamily: "Teacher", color: "#36454f" }}
          >
            Resume
          </Typography>
          <PdfFile
            key="Resume"
            fileUrl={new URL("../assets/RESUME.pdf", import.meta.url)}
          />
        </Stack>
      </Box>
      <Box
        id="recommendations"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
      >
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h2"
            align="center"
            sx={{ fontFamily: "Teacher", color: "#36454f" }}
          >
            Recommendations
          </Typography>
          <PdfFile
            key="Recommendations"
            fileUrl={
              new URL(
                "../assets/Hillary Vance Recommendation Letter.pdf",
                import.meta.url
              )
            }
          />
        </Stack>
      </Box>
      <Box
        id="lesson-plans"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
        paddingTop="4%"
      >
        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h2"
            align="center"
            sx={{ fontFamily: "Teacher", color: "#36454f" }}
          >
            Lesson Plans
          </Typography>
          <Box width="90%">
            <NarrativeWritingLesson />
          </Box>
          <Box width="90%">
            <ScienceLesson />
          </Box>
        </Stack>
      </Box>
      <Box
        id="contact"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
        paddingTop="4%"
      >
        <Stack spacing={2}>
          <Typography
            variant="h2"
            align="center"
            sx={{ fontFamily: "Teacher", color: "#36454f" }}
          >
            Contact
          </Typography>
          <Typography variant="body1" align="left" sx={{ color: "#36454f" }}>
            <b>Email:</b>{" "}
            <a href="mailto:hillary.vance21@gmail.com">
              hillary.vance21@gmail.com
            </a>
          </Typography>
          <Typography variant="body1" align="left" sx={{ color: "#36454f" }}>
            <b>Phone:</b> 425-223-8719
          </Typography>
        </Stack>
      </Box>
    </MenuBar>
  );
}

export default App;
