import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { PdfFile } from "./components/pdf-file";
import Scroll from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
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
  Card,
  CardContent,
  Chip,
  Fade,
  Grow,
  Paper,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import {
  NarrativeWritingLesson,
  ScienceLesson,
} from "./components/lesson-plan/lesson-plan";

interface Props {
  window?: () => Window;
  children?: React.ReactNode;
}

const FiestaFlag: React.FC<{
  xOffset: number;
  animate?: boolean;
  index: number;
}> = ({ xOffset, animate = false, index }) => {
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#FF9F43",
    "#26de81",
  ];
  const color = colors[index % colors.length];
  const flagWidth = 60;
  const flagHeight = 80;

  // Calculate draping effect - creates a natural curve
  const drapeFactor = Math.sin((index / 25) * Math.PI * 4) * 15 + 10;
  const swayOffset = animate ? Math.sin(index * 0.5) * 3 : 0;

  return (
    <g transform={`translate(${xOffset}, ${drapeFactor})`}>
      {/* Flag rope/string with curve */}
      <path
        d={`M 0 0 Q 30 ${drapeFactor * 0.3} 60 0`}
        stroke="#8B4513"
        strokeWidth="3"
        fill="none"
        opacity="0.8"
      />

      {/* Triangular pennant flag with natural sway */}
      <path
        d={`M 5 0 L 55 0 L ${30 + swayOffset} ${flagHeight} Z`}
        fill={color}
        stroke="#FFFFFF"
        strokeWidth="2"
        opacity={animate ? 0.9 : 0.8}
        style={{
          transition: "all 0.6s ease-in-out",
          filter: animate
            ? "drop-shadow(0 6px 12px rgba(0,0,0,0.4))"
            : "drop-shadow(0 3px 6px rgba(0,0,0,0.3))",
          transformOrigin: "30px 0px",
          transform: animate
            ? `rotate(${swayOffset * 0.5}deg)`
            : "rotate(0deg)",
        }}
      />

      {/* Decorative pattern on flag */}
      <circle
        cx={30 + swayOffset * 0.3}
        cy="25"
        r="8"
        fill="#FFFFFF"
        opacity="0.7"
      />
      <circle
        cx={30 + swayOffset * 0.3}
        cy="25"
        r="4"
        fill={color}
        opacity="0.9"
      />

      {/* Small decorative dots that move with the flag */}
      <circle
        cx={20 + swayOffset * 0.2}
        cy="40"
        r="3"
        fill="#FFFFFF"
        opacity="0.6"
      />
      <circle
        cx={40 + swayOffset * 0.2}
        cy="40"
        r="3"
        fill="#FFFFFF"
        opacity="0.6"
      />
      <circle
        cx={30 + swayOffset * 0.4}
        cy="55"
        r="3"
        fill="#FFFFFF"
        opacity="0.6"
      />
    </g>
  );
};

const FiestaBanner: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const flagCount = 25;
  const flagWidth = 60;
  const totalWidth = flagCount * flagWidth;

  // Create multiple attachment points for more realistic draping
  const attachmentPoints = Array.from({ length: flagCount + 1 }, (_, i) => ({
    x: i * flagWidth,
    y: 5 + Math.sin(i * 0.8) * 8, // Creates natural draping curves
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate((prev) => !prev);
    }, 3000); // Slower animation for more realistic movement
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="100%"
      height="120" // Increased height to accommodate draping
      viewBox={`0 0 ${totalWidth} 120`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Background gradient with subtle shadow */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#f3d4d5" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#f3d4d5" stopOpacity="0.3" />
        </linearGradient>

        {/* Shadow filter for more realistic depth */}
        <filter id="bannerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2"
            floodColor="rgba(0,0,0,0.2)"
          />
        </filter>
      </defs>

      {/* Main draped rope - creates the hanging effect */}
      <path
        d={`M 0 10 ${attachmentPoints
          .map((point, i) =>
            i === 0
              ? `M ${point.x} ${point.y}`
              : `Q ${point.x - 20} ${point.y + 5} ${point.x} ${point.y}`
          )
          .join(" ")}`}
        stroke="#8B4513"
        strokeWidth="4"
        fill="none"
        opacity="0.9"
        filter="url(#bannerShadow)"
        style={{
          transition: "all 0.3s ease-in-out",
        }}
      />

      {/* Individual flags with natural draping */}
      {Array.from({ length: flagCount }).map((_, i) => (
        <FiestaFlag
          key={i}
          xOffset={i * flagWidth}
          animate={animate}
          index={i}
        />
      ))}

      {/* Enhanced decorative elements */}
      <g opacity="0.7">
        {/* Floating sparkles that move with the banner */}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i}>
            <circle
              cx={80 + i * 120}
              cy={15 + Math.sin(i * 0.7) * 8}
              r="2"
              fill="#FFD700"
              opacity={animate ? 1 : 0.6}
              style={{
                transition: "all 0.4s ease-in-out",
                transform: animate ? "scale(1.5)" : "scale(1)",
              }}
            />
          </g>
        ))}

        {/* Additional floating confetti */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`confetti-${i}`}>
            <rect
              x={150 + i * 150}
              y={25 + Math.cos(i * 0.6) * 6}
              width="4"
              height="4"
              fill={["#FF6B6B", "#4ECDC4", "#FFEAA7", "#DDA0DD"][i % 4]}
              opacity={animate ? 0.8 : 0.4}
              style={{
                transition: "all 0.5s ease-in-out",
                transform: animate ? "rotate(45deg)" : "rotate(0deg)",
              }}
            />
          </g>
        ))}
      </g>

      {/* Attachment points to menu bar (small decorative elements) */}
      {attachmentPoints
        .slice(0, -1)
        .filter((_, i) => i % 3 === 0)
        .map((point, i) => (
          <g key={`attachment-${i}`}>
            <circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="#8B4513"
              opacity="0.7"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="1.5"
              fill="#D2691E"
              opacity="0.9"
            />
          </g>
        ))}
    </svg>
  );
};

// Animated section wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode; id: string }> = ({
  children,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={ref} id={id}>
      <Fade in={isVisible} timeout={1000}>
        <div>{children}</div>
      </Fade>
    </Box>
  );
};

// Skills/Qualifications component
const SkillsSection: React.FC = () => {
  const skills = [
    "Elementary Education",
    "Psychology Background",
    "Inclusive Teaching",
    "Student Engagement",
    "Curriculum Development",
    "Classroom Management",
    "Educational Technology",
    "Student Assessment",
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <Stack
        direction="row"
        spacing={1}
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
            timeout={1000 + index * 100}
            key={skill}
          >
            <Chip
              label={skill}
              sx={{
                backgroundColor: "#4ECDC4",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: "#45B7D1",
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
  const [hovered, setHovered] = React.useState<string | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Teacher" }}>
        Ms. Hillary Vance
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Scroll.Button}
              to={item}
              smooth={true}
              duration={500}
              offset={-64}
              sx={{ textAlign: "center" }}
            >
              <ListItemText
                primary={item.split("-").join(" ")}
                sx={{ textTransform: "capitalize" }}
              />
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
    height: "3px",
    backgroundColor: "#FF6B6B",
    borderRadius: "2px",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#f3d4d5",
          color: "#36454f",
          boxShadow: 3,
        }}
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
                offset={-154}
                onClick={() => setSelected(item)}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  fontFamily: "Teacher",
                  fontSize: "22px",
                  color: "#36454f",
                  position: "relative",
                  textTransform: "capitalize",
                  "&:hover": {
                    "&::after": buttonLine,
                    backgroundColor: "rgba(255, 107, 107, 0.1)",
                  },
                  "&::after": selected === item ? buttonLine : {},
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
            keepMounted: true,
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
          position: "fixed",
          top: "64px",
          width: "100%",
          zIndex: 1,
        }}
      >
        <FiestaBanner />
      </Box>
      <Box component="main" sx={{ width: "100%", backgroundColor: "#f3d4d5" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

function App() {
  return (
    <MenuBar>
      <AnimatedSection id="about-me">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="calc(100vh - 64px)"
          sx={{ marginTop: "90px", padding: { xs: 2, sm: 4 } }}
        >
          <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
            <Typography
              variant="h1"
              fontFamily="Baltiholm"
              align="center"
              sx={{
                background: "linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)",
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
              <Box display="flex" justifyContent="center" alignItems="center">
                <Paper
                  elevation={8}
                  sx={{
                    p: 2,
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
                      maxWidth: 290,
                      borderRadius: 2,
                    }}
                    alt="Hillary Vance"
                    src={new URL(
                      "../assets/hillary-vance.jpeg",
                      import.meta.url
                    ).toString()}
                  />
                </Paper>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Stack
                  direction="column"
                  spacing={2}
                  textAlign="justify"
                  sx={{ maxWidth: "900px" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    I am proud to be on this journey as an educator with deep
                    roots in the Snoqualmie Valley.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    I was born and raised in the beautiful Snoqualmie Valley,
                    attending Fall City Elementary and later graduating from
                    Mount Si High School in 2009.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    My passion for understanding people led me to Central
                    Washington University, where I earned my bachelor's degree
                    in Psychology.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    My love for teaching led me to pursue my Master's in
                    Elementary Education from Western Governors University.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    As part of my journey, I completed my student teaching in
                    the Lake Washington School District, where I gained
                    invaluable hands-on experience working with students and
                    fostering a positive learning environment.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    That experience reinforced my belief in creating engaging,
                    supportive, and inclusive classrooms where every student can
                    thrive.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '20px',
                      lineHeight: 1.6,
                    }}
                  >
                    I'm so excited to continue growing as an educator and making
                    a meaningful impact in the lives of my students!
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </AnimatedSection>

      <AnimatedSection id="philosophy">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          // minHeight="calc(100vh - 64px)"
          sx={{ marginTop: "90px", padding: 4 }}
        >
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: "Teacher",
                color: "#36454f",
                textDecoration: "underline",
                textDecorationColor: "#FF6B6B",
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
                  "../assets/teaching-philosophy.png",
                  import.meta.url
                ).toString()}
              />
            </Paper>
          </Stack>
        </Box>
      </AnimatedSection>

      <AnimatedSection id="resume">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="calc(100vh - 64px)"
          sx={{ marginTop: "90px", padding: 4 }}
        >
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: "Teacher",
                color: "#36454f",
                textDecoration: "underline",
                textDecorationColor: "#4ECDC4",
              }}
            >
              Resume
            </Typography>
            <PdfFile
              key="Resume"
              fileUrl={new URL("../assets/RESUME.pdf", import.meta.url)}
            />
          </Stack>
        </Box>
      </AnimatedSection>

      <AnimatedSection id="recommendations">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="calc(100vh - 64px)"
          sx={{ marginTop: "90px", padding: 4 }}
        >
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: "Teacher",
                color: "#36454f",
                textDecoration: "underline",
                textDecorationColor: "#96CEB4",
              }}
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
      </AnimatedSection>

      <AnimatedSection id="lesson-plans">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="calc(100vh - 64px)"
          sx={{ marginTop: "90px", padding: 4 }}
        >
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: "Teacher",
                color: "#36454f",
                textDecoration: "underline",
                textDecorationColor: "#FFEAA7",
              }}
            >
              Lesson Plans
            </Typography>
            <Box width="90%" sx={{ maxWidth: "1200px" }}>
              <NarrativeWritingLesson />
            </Box>
            <Box width="90%" sx={{ maxWidth: "1200px" }}>
              <ScienceLesson />
            </Box>
          </Stack>
        </Box>
      </AnimatedSection>

      <AnimatedSection id="contact">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="calc(100vh - 64px)"
          sx={{ marginTop: "90px", padding: 4 }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 4,
              backgroundColor: "#fff",
              borderRadius: 3,
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <Stack spacing={3} alignItems="center">
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontFamily: "Teacher",
                  color: "#36454f",
                  textDecoration: "underline",
                  textDecorationColor: "#DDA0DD",
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <EmailIcon sx={{ color: "#FF6B6B", fontSize: 30 }} />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "#36454f", fontWeight: "bold" }}
                  >
                    Email:
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#36454f" }}>
                    <a
                      href="mailto:hillary.vance21@gmail.com"
                      style={{
                        color: "#4ECDC4",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      hillary.vance21@gmail.com
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneIcon sx={{ color: "#4ECDC4", fontSize: 30 }} />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{ color: "#36454f", fontWeight: "bold" }}
                  >
                    Phone:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#36454f", fontWeight: "bold" }}
                  >
                    425-223-8719
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  mt: 2,
                }}
              >
                <StarIcon sx={{ color: "#FFEAA7" }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontFamily: "Teacher",
                    fontStyle: "italic",
                  }}
                >
                  Ready to inspire young minds!
                </Typography>
                <StarIcon sx={{ color: "#FFEAA7" }} />
              </Box>
            </Stack>
          </Paper>
        </Box>
      </AnimatedSection>
    </MenuBar>
  );
}

export default App;
