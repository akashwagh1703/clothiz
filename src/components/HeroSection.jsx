// // src/components/HeroSection.jsx
// import {
//   Box,
//   Typography,
//   Button,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         minHeight: "90vh",
//         background: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/assets/hero-bg.jpg') center/cover`,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: 2,
//         textAlign: "center",
//       }}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//         style={{
//           background: "rgba(255,255,255,0.1)",
//           padding: "2rem",
//           borderRadius: "1rem",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <Typography
//           variant={isMobile ? "h4" : "h2"}
//           color="white"
//           fontWeight="bold"
//         >
//           Rent Your Style with Clothiz
//         </Typography>
//         <Typography variant="h6" color="white" mb={3}>
//           Affordable. Eco-Friendly. Fabulous.
//         </Typography>
//         <Button variant="contained" size="large">
//           Explore Collection
//         </Button>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;

// import {
//   Box,
//   Typography,
//   Button,
//   useMediaQuery,
//   useTheme,
//   Chip,
// } from "@mui/material";
// import { motion } from "framer-motion";

// // Floating glowing blobs
// const AnimatedBlob = ({ top, left, size, delay, color }) => (
//   <motion.div
//     initial={{ scale: 1, opacity: 0.4 }}
//     animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
//     transition={{ duration: 7, repeat: Infinity, delay }}
//     style={{
//       position: "absolute",
//       top,
//       left,
//       width: size,
//       height: size,
//       background: color,
//       borderRadius: "50%",
//       filter: "blur(60px)",
//       zIndex: 1,
//       mixBlendMode: "screen",
//     }}
//   />
// );

// const HeroSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "60vh",
//         backgroundImage: `linear-gradient(to right top, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url('/assets/hero-bg.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: 2,
//         py: 4,
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       {/* Blobs */}
//       <AnimatedBlob
//         top="8%"
//         left="20%"
//         size="160px"
//         delay={0}
//         color="#ff99cc"
//       />
//       <AnimatedBlob
//         top="70%"
//         left="15%"
//         size="140px"
//         delay={2}
//         color="#66ffcc"
//       />
//       <AnimatedBlob
//         top="25%"
//         left="70%"
//         size="140px"
//         delay={4}
//         color="#ffff66"
//       />

//       {/* Sparkles Layer */}
//       <Box
//         component="img"
//         src="../assets/images/sparkles.svg"
//         alt="sparkles"
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           opacity: 0.1,
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Glass content card */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           position: "relative",
//           zIndex: 2,
//           background: "rgba(255,255,255,0.07)",
//           padding: isMobile ? "1.2rem" : "2rem",
//           borderRadius: "18px",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255,255,255,0.2)",
//           maxWidth: "420px",
//           width: "100%",
//         }}
//       >
//         <Chip
//           label="✨ Coming Soon in Your City"
//           sx={{
//             backgroundColor: "#ffffff",
//             color: "#000",
//             fontWeight: 600,
//             mb: 1.5,
//             fontSize: "0.75rem",
//             px: 1.5,
//             py: 0.4,
//             borderRadius: "12px",
//           }}
//         />

//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           color="white"
//           fontWeight={800}
//           sx={{ mb: 1 }}
//         >
//           Feel <span style={{ color: "#FFD700" }}>Fabulous</span> with Clothiz
//         </Typography>

//         <Typography
//           variant="body2"
//           color="#e0e0e0"
//           sx={{ mb: 2, fontSize: isMobile ? "0.85rem" : "1rem" }}
//         >
//           Rent your dream outfit. Impress. Return. Repeat.
//         </Typography>

//         <Button
//           variant="contained"
//           size="small"
//           sx={{
//             backgroundColor: "#FFD700",
//             color: "#000",
//             fontWeight: 700,
//             borderRadius: "20px",
//             px: 3,
//             py: 1,
//             fontSize: "0.85rem",
//             boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
//             "&:hover": {
//               backgroundColor: "#FFC400",
//               transform: "translateY(-2px)",
//             },
//           }}
//         >
//           Get Notified
//         </Button>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;

// import {
//   Box,
//   Typography,
//   Button,
//   useMediaQuery,
//   useTheme,
//   Chip,
// } from "@mui/material";
// import { motion } from "framer-motion";

// // Floating glowing blobs
// const AnimatedBlob = ({ top, left, size, delay, color }) => (
//   <motion.div
//     initial={{ scale: 1, opacity: 0.4 }}
//     animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
//     transition={{ duration: 6, repeat: Infinity, delay }}
//     style={{
//       position: "absolute",
//       top,
//       left,
//       width: size,
//       height: size,
//       background: color,
//       borderRadius: "50%",
//       filter: "blur(80px)",
//       zIndex: 1,
//       mixBlendMode: "screen",
//     }}
//   />
// );

// const HeroSection = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: isMobile ? "70vh" : "85vh",
//         backgroundImage: `linear-gradient(to right top, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('/assets/hero-bg.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: 2,
//         py: 4,
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       {/* Blobs */}
//       <AnimatedBlob
//         top="10%"
//         left="15%"
//         size="180px"
//         delay={0}
//         color="#ff99cc"
//       />
//       <AnimatedBlob
//         top="65%"
//         left="10%"
//         size="160px"
//         delay={2}
//         color="#66ffcc"
//       />
//       <AnimatedBlob
//         top="20%"
//         left="75%"
//         size="160px"
//         delay={4}
//         color="#ffff66"
//       />

//       {/* Sparkles Layer */}
//       <Box
//         component="img"
//         src="../assets/images/sparkles.svg"
//         alt="sparkles"
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           opacity: 0.08,
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Glassmorphic Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={{
//           position: "relative",
//           zIndex: 2,
//           background: "rgba(255,255,255,0.07)",
//           padding: isMobile ? "1.5rem" : "2.5rem",
//           borderRadius: "20px",
//           backdropFilter: "blur(14px)",
//           border: "1px solid rgba(255,255,255,0.15)",
//           maxWidth: "460px",
//           width: "100%",
//           boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
//         }}
//       >
//         <Chip
//           label="✨ Coming Soon in Your City"
//           sx={{
//             backgroundColor: "#ffffff",
//             color: "#000",
//             fontWeight: 600,
//             mb: 2,
//             fontSize: "0.75rem",
//             px: 1.5,
//             py: 0.5,
//             borderRadius: "16px",
//           }}
//         />

//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           fontWeight={800}
//           sx={{
//             mb: 1.5,
//             background: "linear-gradient(90deg, #FFD700, #FFC107)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Feel Fabulous with Clothiz
//         </Typography>

//         <Typography
//           variant="body2"
//           color="#e0e0e0"
//           sx={{
//             mb: 3,
//             fontSize: isMobile ? "0.9rem" : "1rem",
//             px: isMobile ? 0 : 2,
//           }}
//         >
//           Rent your dream outfit. Impress. Return. Repeat. All from the comfort
//           of your home.
//         </Typography>

//         <motion.div whileHover={{ scale: 1.07 }}>
//           <Button
//             variant="contained"
//             size="medium"
//             sx={{
//               backgroundColor: "#FFD700",
//               color: "#000",
//               fontWeight: 700,
//               borderRadius: "24px",
//               px: 4,
//               py: 1.2,
//               fontSize: "0.9rem",
//               boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
//               transition: "all 0.3s ease",
//               "&:hover": {
//                 backgroundColor: "#FFC400",
//                 transform: "translateY(-1.5px)",
//               },
//             }}
//           >
//             Get Notified
//           </Button>
//         </motion.div>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroSection;

import {
  Box,
  Typography,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "70vh" : "80vh",
        overflow: "hidden",
        background: "#0c0c1d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
      }}
    >
      {/* Falling Snow / Stars */}
      <Box
        className="snow"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {[...Array(80)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              top: `-${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: "#fff",
              borderRadius: "50%",
              opacity: Math.random() * 0.6 + 0.3,
              animation: `fall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </Box>

      {/* Hero Content */}
      <Box
        sx={{
          textAlign: "center",
          zIndex: 2,
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <Chip
          label="🌟 Coming Soon in Your City"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: 600,
            fontSize: "0.75rem",
            mb: 2,
            px: 2,
            py: 0.5,
            borderRadius: "12px",
          }}
        />

        <Typography
          variant={isMobile ? "h5" : "h3"}
          fontWeight={900}
          sx={{
            mb: 2,
            lineHeight: 1.2,
            background: "linear-gradient(90deg, #FFD700, #FF5722)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Rent Fashion. <br />
          Own The Moment.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ddd",
            fontSize: isMobile ? "1rem" : "1.1rem",
            mb: 3,
            px: isMobile ? 1 : 4,
            lineHeight: 1.7,
          }}
        >
          Clothiz is your destination for premium rental outfits — sustainable,
          affordable, and delivered to your door.
        </Typography>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "#000",
              fontWeight: 700,
              borderRadius: "30px",
              px: 4,
              py: 1.2,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#FFC400",
              },
            }}
          >
            Get Notified
          </Button>
        </motion.div>
      </Box>

      {/* CSS Keyframes */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </Box>
  );
};

export default HeroSection;
