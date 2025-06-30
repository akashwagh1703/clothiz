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

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: isMobile ? 5 : 8,
        px: 3,
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "700px",
          px: isMobile ? 2 : 4,
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight={700}
          sx={{
            mb: 1.5,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              width: "50%",
              height: "4px",
              backgroundColor: "#FFD700",
              bottom: -6,
              left: "25%",
              borderRadius: "2px",
            },
          }}
        >
          About Clothiz
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 3,
            color: "#333",
            fontSize: isMobile ? "1rem" : "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Clothiz is your fashion companion — a rental clothing service that
          brings stylish, sustainable, and affordable fashion right to your
          doorstep. Whether it’s weddings, parties, or everyday flair, we’ve got
          your look covered.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
