// // src/components/Header.jsx
// import { AppBar, Toolbar, Typography, Box, IconButton, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { Shirt, MessageCircleMore } from "lucide-react";

// const Header = () => (
//   //   <AppBar position="sticky" color="default" elevation={1}>
//   //     <Toolbar>
//   //       <Shirt style={{ marginRight: 8 }} />
//   //       <Typography
//   //         variant="h6"
//   //         sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}
//   //       >
//   //         Clothiz
//   //       </Typography>
//   //       <Box>
//   //         <IconButton component={Link} to="/" color="primary">
//   //           <Typography variant="button">Home</Typography>
//   //         </IconButton>
//   //         <IconButton component={Link} to="/feedback" color="primary">
//   //           <MessageCircleMore size={20} style={{ marginRight: 4 }} />
//   //           <Typography variant="button">Feedback</Typography>
//   //         </IconButton>
//   //       </Box>
//   //     </Toolbar>
//   //   </AppBar>

//   <AppBar
//     position="sticky"
//     elevation={0}
//     sx={{ bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(6px)" }}
//   >
//     <Toolbar>
//       <Typography
//         variant="h6"
//         sx={{
//           flexGrow: 1,
//           fontWeight: "bold",
//           letterSpacing: 1,
//           color: "primary.main",
//         }}
//       >
//         Clothiz
//       </Typography>
//       <Box>
//         <Button component={Link} to="/" color="primary" sx={{ mx: 1 }}>
//           Home
//         </Button>
//         <Button
//           component={Link}
//           to="/feedback"
//           variant="outlined"
//           color="primary"
//           sx={{ mx: 1 }}
//         >
//           Feedback
//         </Button>
//       </Box>
//     </Toolbar>
//   </AppBar>
// );

// export default Header;

// src/components/Header.jsx
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Shirt, MessageCircleMore } from "lucide-react";
import { styled } from "@mui/material/styles";

// Styled components for enhanced styling
const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled
    ? "rgba(255, 255, 255, 0.95)"
    : "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)",
  backdropFilter: "blur(12px)",
  borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : "none",
  boxShadow: scrolled
    ? "0 2px 20px rgba(0, 0, 0, 0.08)"
    : "0 1px 3px rgba(0, 0, 0, 0.05)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: "72px",
  padding: "0 24px",
  [theme.breakpoints.up("md")]: {
    padding: "0 48px",
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const BrandIcon = styled(Shirt)(({ theme }) => ({
  marginRight: 12,
  color: theme.palette.primary.main,
  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "rotate(5deg)",
  },
}));

const BrandText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  letterSpacing: "0.5px",
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  margin: "0 8px",
  padding: "8px 24px",
  borderRadius: "24px",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "0.95rem",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  ...(active
    ? {
        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        color: "white",
        boxShadow: `0 4px 15px rgba(${theme.palette.primary.main
          .replace("#", "")
          .match(/.{2}/g)
          .map((hex) => parseInt(hex, 16))
          .join(", ")}, 0.4)`,
        transform: "translateY(-1px)",
      }
    : {
        color: theme.palette.text.primary,
        "&:hover": {
          background: `linear-gradient(45deg, ${theme.palette.primary.main}15, ${theme.palette.primary.main}25)`,
          transform: "translateY(-2px)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
        },
      }),

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    transition: "left 0.5s",
  },

  "&:hover::before": {
    left: "100%",
  },
}));

const FeedbackButton = styled(NavButton)(({ theme, active }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",

  ...(active
    ? {}
    : {
        border: `2px solid ${theme.palette.primary.main}`,
        "&:hover": {
          background: theme.palette.primary.main,
          color: "white",
          "& .feedback-icon": {
            transform: "rotate(360deg)",
          },
        },
      }),
}));

const FeedbackIcon = styled(MessageCircleMore)(({ theme }) => ({
  transition: "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
}));

// Hide header on scroll down, show on scroll up
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const location = useLocation();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const isActive = (path) => location.pathname === path;

  return (
    <HideOnScroll>
      <StyledAppBar position="sticky" elevation={0} scrolled={scrollTrigger}>
        <StyledToolbar>
          <LogoContainer
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <BrandIcon size={28} />
            <BrandText variant="h6">Clothiz</BrandText>
          </LogoContainer>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavButton component={Link} to="/" active={isActive("/")}>
              Home
            </NavButton>

            <FeedbackButton
              component={Link}
              to="/feedback"
              active={isActive("/feedback")}
            >
              <FeedbackIcon className="feedback-icon" size={18} />
              Feedback
            </FeedbackButton>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default Header;
