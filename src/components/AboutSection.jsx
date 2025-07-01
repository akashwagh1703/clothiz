// // src/components/AboutSection.jsx
// import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// const AboutSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box sx={{ py: 6, px: 3, textAlign: "center", backgroundColor: "#f8f8f8" }}>
//       <Typography
//         variant={isMobile ? "h5" : "h4"}
//         gutterBottom
//         fontWeight="bold"
//       >
//         About Clothiz
//       </Typography>
//       <Typography variant="body1" maxWidth="600px" mx="auto">
//         Clothiz is your fashion companion — a rental clothing service that makes
//         sustainable, affordable fashion accessible for all occasions.
//       </Typography>
//     </Box>
//   );
// };

// export default AboutSection;

// import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// const AboutSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         py: isMobile ? 5 : 8,
//         px: 3,
//         background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           textAlign: "center",
//           maxWidth: "700px",
//           px: isMobile ? 2 : 4,
//         }}
//       >
//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           fontWeight={700}
//           sx={{
//             mb: 1.5,
//             position: "relative",
//             display: "inline-block",
//             "&::after": {
//               content: '""',
//               position: "absolute",
//               width: "50%",
//               height: "4px",
//               backgroundColor: "#1976d2",
//               bottom: -6,
//               left: "25%",
//               borderRadius: "2px",
//             },
//           }}
//         >
//           About Clothiz
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             mt: 3,
//             color: "#333",
//             fontSize: isMobile ? "1rem" : "1.1rem",
//             lineHeight: 1.7,
//           }}
//         >
//           Clothiz is your fashion companion — a rental clothing service that
//           brings stylish, sustainable, and affordable fashion right to your
//           doorstep. Whether it’s weddings, parties, or everyday flair, we’ve got
//           your look covered.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default AboutSection;

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#0c0c1d",
        py: isMobile ? 6 : 10,
        px: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 800,
          width: "100%",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: isMobile ? "2rem 1.5rem" : "3rem 3rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          textAlign: "center",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight={800}
          sx={{
            mb: 2,
            background: "linear-gradient(90deg, #FFD700, #FFA500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "25%",
              width: "50%",
              height: "3px",
              backgroundColor: "#FFD700",
              borderRadius: "2px",
              opacity: 0.9,
            },
          }}
        >
          About Clothiz
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ddd",
            fontSize: isMobile ? "1rem" : "1.1rem",
            mt: 3,
            lineHeight: 1.8,
          }}
        >
          <strong>Clothiz</strong> is your fashion companion — a premium rental
          clothing service that delivers sustainable, stylish, and affordable
          outfits to your doorstep. Whether it’s weddings, parties, or everyday
          looks, we’ve got your vibe covered — hassle-free and commitment-free.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default AboutSection;
