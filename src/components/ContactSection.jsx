// import { Box, Typography, Grid, Link } from "@mui/material";

// const ContactSection = () => (
//   <Box sx={{ py: { xs: 5, md: 8 }, px: 3, backgroundColor: "#f3f4f6" }}>
//     <Typography
//       variant="h4"
//       align="center"
//       gutterBottom
//       fontWeight="bold"
//       sx={{ mb: 4 }}
//     >
//       Contact Us
//     </Typography>

//     <Grid container spacing={4} justifyContent="center">
//       {/* Contact Info */}
//       <Grid item xs={12} md={5}>
//         <Box sx={{ lineHeight: 2, textAlign: { xs: "center", md: "left" } }}>
//           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//             📍 <strong>Nashik, Maharashtra</strong>
//           </Typography>
//           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//             📞{" "}
//             <Link href="tel:+919876543210" underline="hover" color="inherit">
//               +91-9876543210
//             </Link>
//           </Typography>
//           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//             📧{" "}
//             <Link
//               href="mailto:support@clothiz.in"
//               underline="hover"
//               color="inherit"
//             >
//               support@clothiz.in
//             </Link>
//           </Typography>
//         </Box>
//       </Grid>

//       {/* Map Embed */}
//       <Grid item xs={12} md={5}>
//         <Box
//           sx={{
//             borderRadius: 3,
//             overflow: "hidden",
//             boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//             height: 250,
//           }}
//         >
//           <iframe
//             src="https://maps.google.com/maps?q=nashik&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             title="Clothiz Location"
//           ></iframe>
//         </Box>
//       </Grid>
//     </Grid>
//   </Box>
// );

// export default ContactSection;

// import { Box, Typography, Grid, Link } from "@mui/material";

// const ContactSection = () => (
//   <Box
//     sx={{
//       py: { xs: 6, md: 10 },
//       px: 3,
//       background: "linear-gradient(145deg, #e0f7fa, #fce4ec)",
//     }}
//   >
//     <Typography
//       variant="h4"
//       align="center"
//       fontWeight="bold"
//       sx={{
//         mb: 4,
//         background: "linear-gradient(45deg, #6a11cb, #2575fc)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//       }}
//     >
//       Contact Us
//     </Typography>

//     <Grid container spacing={5} justifyContent="center">
//       {/* Contact Info */}
//       <Grid item xs={12} md={5}>
//         <Box
//           sx={{
//             lineHeight: 2,
//             textAlign: { xs: "center", md: "left" },
//             backgroundColor: "#ffffffdd",
//             p: 3,
//             borderRadius: 4,
//             boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
//           }}
//         >
//           <Typography
//             variant="body1"
//             sx={{ fontWeight: 500, fontSize: "1.1rem" }}
//           >
//             📍 <strong>Nashik, Maharashtra</strong>
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ fontWeight: 500, fontSize: "1.1rem" }}
//           >
//             📞{" "}
//             <Link href="tel:+919876543210" underline="hover" color="#1976d2">
//               +91-9876543210
//             </Link>
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ fontWeight: 500, fontSize: "1.1rem" }}
//           >
//             📧{" "}
//             <Link
//               href="mailto:support@clothiz.in"
//               underline="hover"
//               color="#d81b60"
//             >
//               support@clothiz.in
//             </Link>
//           </Typography>
//         </Box>
//       </Grid>

//       {/* Map Embed */}
//       <Grid item xs={12} md={5}>
//         <Box
//           sx={{
//             borderRadius: 4,
//             overflow: "hidden",
//             boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//             height: 250,
//             border: "2px solid #fce4ec",
//           }}
//         >
//           <iframe
//             src="https://maps.google.com/maps?q=nashik&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             title="Clothiz Location"
//           ></iframe>
//         </Box>
//       </Grid>
//     </Grid>
//   </Box>
// );

// export default ContactSection;

import {
  Box,
  Typography,
  Grid,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 3,
        background: "#0e0e1a",
        color: "#fff",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        fontWeight="bold"
        sx={{
          mb: 5,
          background: "linear-gradient(90deg, #FFD700, #fff)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {/* Contact Info Box */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              p: 4,
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 6px 18px rgba(255,255,255,0.06)",
              textAlign: { xs: "center", md: "left" },
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 12px 24px rgba(255,255,255,0.1)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "1.1rem", mb: 1 }}
            >
              📍 <strong>Nashik, Maharashtra</strong>
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "1.1rem", mb: 1 }}
            >
              📞{" "}
              <Link
                href="tel:+919876543210"
                underline="hover"
                sx={{ color: "#FFD700" }}
              >
                +91-9876543210
              </Link>
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: "1.1rem" }}
            >
              📧{" "}
              <Link
                href="mailto:support@clothiz.in"
                underline="hover"
                sx={{ color: "#FFD700" }}
              >
                support@clothiz.in
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Map Box */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(255,255,255,0.08)",
              height: 260,
              border: "2px solid #FFD70044",
              transition: "0.3s ease",
              "&:hover": {
                boxShadow: "0 14px 40px rgba(255,215,0,0.2)",
                borderColor: "#FFD700",
              },
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=nashik&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Clothiz Location"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
