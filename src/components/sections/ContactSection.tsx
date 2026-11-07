import { Box, Stack, Typography, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import StarIcon from "@mui/icons-material/Star";
import {
  colors,
  teacherFont,
  sectionLayout,
  sectionHeading,
} from "../../theme";
import { PortfolioSection } from "../layout/PortfolioSection";
export function ContactSection() {
  return (
    <PortfolioSection id="contact">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - var(--header-height))"
        sx={sectionLayout}
      >
        <Paper
          elevation={8}
          sx={{
            p: 4,
            backgroundColor: "#fff",
            borderRadius: 3,
            maxWidth: "500px",
            overflowWrap: "anywhere",
            width: "100%",
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h2"
              align="center"
              sx={{
                ...sectionHeading(colors.lavender),
              }}
            >
              Contact
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "30px minmax(0, 1fr)",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <EmailIcon sx={{ color: colors.coral, fontSize: 30 }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: colors.ink, fontWeight: "bold" }}
                >
                  Email:
                </Typography>
                <Typography variant="body1" sx={{ color: colors.ink }}>
                  <a
                    href="mailto:hillary.vance21@gmail.com"
                    style={{
                      color: "#227f79",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    hillary.vance21@gmail.com
                  </a>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "30px minmax(0, 1fr)",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <PhoneIcon sx={{ color: colors.teal, fontSize: 30 }} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: colors.ink, fontWeight: "bold" }}
                >
                  Phone:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: colors.ink, fontWeight: "bold" }}
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
              <StarIcon sx={{ color: colors.yellow }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontFamily: teacherFont,
                  fontStyle: "italic",
                }}
              >
                Ready to inspire young minds!
              </Typography>
              <StarIcon sx={{ color: colors.yellow }} />
            </Box>
          </Stack>
        </Paper>
      </Box>
    </PortfolioSection>
  );
}
