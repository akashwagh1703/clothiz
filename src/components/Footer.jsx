// src/components/Footer.jsx
import {
  Box,
  Typography,
  Link as MuiLink,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        p: 4,
        background: "linear-gradient(90deg, #e0f7fa 0%, #fce4ec 100%)",
        textAlign: "center",
        borderTop: "2px solid #ddd",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          mb: 1,
          color: "#333",
        }}
      >
        &copy; {new Date().getFullYear()} <strong>Clothiz</strong> — All rights
        reserved.
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={isMobile ? 2 : 4}
        sx={{ mt: 2 }}
      >
        <MuiLink
          href="#"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#e91e63",
            transition: "all 0.3s",
            "&:hover": { transform: "scale(1.05)", color: "#ad1457" },
          }}
        >
          <Instagram size={18} /> Instagram
        </MuiLink>

        <MuiLink
          href="#"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#3b5998",
            transition: "all 0.3s",
            "&:hover": { transform: "scale(1.05)", color: "#1d3c78" },
          }}
        >
          <Facebook size={18} /> Facebook
        </MuiLink>

        <MuiLink
          href="#"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#1da1f2",
            transition: "all 0.3s",
            "&:hover": { transform: "scale(1.05)", color: "#0d8ae0" },
          }}
        >
          <Twitter size={18} /> Twitter
        </MuiLink>
      </Stack>
    </Box>
  );
};

export default Footer;
