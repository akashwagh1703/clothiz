// import { Box, Typography } from "@mui/material";
// import Carousel from "react-material-ui-carousel";

// const customerNeeds = [
//   {
//     title: "More Outfit Variety",
//     feedback: "I'd love to see more options for men’s ethnic and formal wear.",
//   },
//   {
//     title: "Flexible Rental Periods",
//     feedback:
//       "Sometimes I only need an outfit for a few hours. Can you offer short-term plans?",
//   },
//   {
//     title: "Try Before You Rent",
//     feedback: "Is there a way to try clothes before finalizing the rental?",
//   },
//   {
//     title: "Larger Size Availability",
//     feedback: "Plus-size options are important to me. Please expand the range.",
//   },
//   {
//     title: "Seasonal Collections",
//     feedback:
//       "Would be great to see seasonal fashion trends in the collection!",
//   },
// ];

// const CustomerNeedsSlider = () => (
//   <Box sx={{ backgroundColor: "#fdfdfd", py: { xs: 5, md: 8 }, px: 2 }}>
//     <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
//       What Customers Want From Us
//     </Typography>

//     <Carousel
//       autoPlay
//       animation="slide"
//       indicators={false}
//       navButtonsAlwaysVisible
//       navButtonsProps={{
//         style: {
//           backgroundColor: "#FFD700",
//           color: "#000",
//           borderRadius: 50,
//         },
//       }}
//     >
//       {customerNeeds.map((item, idx) => (
//         <Box key={idx} sx={{ textAlign: "center", px: 2 }}>
//           <Box
//             sx={{
//               maxWidth: 650,
//               mx: "auto",
//               p: 4,
//               backgroundColor: "#fff",
//               borderRadius: 4,
//               boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
//               transition: "transform 0.3s ease",
//               "&:hover": {
//                 transform: "scale(1.02)",
//               },
//             }}
//           >
//             <Typography variant="h6" fontWeight={700} color="primary" mb={1}>
//               {item.title}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{ fontStyle: "italic", color: "#555", lineHeight: 1.6 }}
//             >
//               “{item.feedback}”
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Carousel>
//   </Box>
// );

// export default CustomerNeedsSlider;

import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";

const customerNeeds = [
  {
    title: "More Outfit Variety",
    feedback: "I'd love to see more options for men’s ethnic and formal wear.",
  },
  {
    title: "Flexible Rental Periods",
    feedback:
      "Sometimes I only need an outfit for a few hours. Can you offer short-term plans?",
  },
  {
    title: "Try Before You Rent",
    feedback: "Is there a way to try clothes before finalizing the rental?",
  },
  {
    title: "Larger Size Availability",
    feedback: "Plus-size options are important to me. Please expand the range.",
  },
  {
    title: "Seasonal Collections",
    feedback:
      "Would be great to see seasonal fashion trends in the collection!",
  },
];

const CustomerNeedsSlider = () => (
  <Box
    sx={{
      backgroundColor: "#0c0c1d",
      py: { xs: 6, md: 10 },
      px: 2,
      textAlign: "center",
    }}
  >
    <Typography
      variant="h4"
      fontWeight={800}
      sx={{
        mb: 4,
        background: "linear-gradient(90deg, #FFD700, #FFA500)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 1px 4px rgba(0,0,0,0.5)",
      }}
    >
      What Customers Want From Us
    </Typography>

    <Carousel
      autoPlay
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: "#FFD700",
          color: "#000",
          borderRadius: 50,
        },
      }}
    >
      {customerNeeds.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", px: 2 }}>
            <Box
              sx={{
                maxWidth: 700,
                mx: "auto",
                p: { xs: 3, md: 4 },
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "20px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  mb: 1,
                  color: "#FFD700",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#ddd",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                “{item.feedback}”
              </Typography>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Carousel>
  </Box>
);

export default CustomerNeedsSlider;
