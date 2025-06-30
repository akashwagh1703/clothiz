// // src/components/TestimonialSlider.jsx
// import { Box, Typography } from "@mui/material";
// import Carousel from "react-material-ui-carousel";

// const testimonials = [
//   {
//     name: "Aarav",
//     review: "Amazing service! My outfit was perfect for the wedding.",
//   },
//   { name: "Sneha", review: "Affordable and stylish — loved the collection!" },
//   {
//     name: "Rohit",
//     review: "Super quick delivery and return. Highly recommend Clothiz.",
//   },
// ];

// const TestimonialSlider = () => (
//   <Box sx={{ backgroundColor: "#fafafa", py: 5 }}>
//     <Typography variant="h4" align="center" gutterBottom>
//       What Our Customers Say
//     </Typography>
//     <Carousel
//       autoPlay
//       animation="slide"
//       indicators={false}
//       navButtonsAlwaysVisible
//     >
//       {testimonials.map((t, idx) => (
//         <Box key={idx} sx={{ textAlign: "center", px: 2 }}>
//           <Box
//             sx={{
//               maxWidth: 600,
//               mx: "auto",
//               p: 4,
//               backgroundColor: "#fff",
//               borderRadius: 4,
//               boxShadow: 3,
//             }}
//           >
//             <Typography variant="h6" fontStyle="italic" mb={2}>
//               "{t.review}"
//             </Typography>
//             <Typography variant="subtitle1" color="primary">
//               – {t.name}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Carousel>
//   </Box>
// );

// export default TestimonialSlider;

import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const testimonials = [
  {
    name: "Aarav",
    review: "Amazing service! My outfit was perfect for the wedding.",
  },
  { name: "Sneha", review: "Affordable and stylish — loved the collection!" },
  {
    name: "Rohit",
    review: "Super quick delivery and return. Highly recommend Clothiz.",
  },
];

const TestimonialSlider = () => (
  <Box sx={{ backgroundColor: "#fafafa", py: { xs: 5, md: 8 }, px: 2 }}>
    <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
      What Our Customers Say
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
      {testimonials.map((t, idx) => (
        <Box key={idx} sx={{ textAlign: "center", px: 2 }}>
          <Box
            sx={{
              maxWidth: 600,
              mx: "auto",
              p: 4,
              backgroundColor: "#ffffff",
              borderRadius: 4,
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <Typography
              variant="h6"
              fontStyle="italic"
              color="#555"
              mb={2}
              sx={{ lineHeight: 1.6 }}
            >
              “{t.review}”
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{ color: "#FFD700" }}
            >
              – {t.name}
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  </Box>
);

export default TestimonialSlider;
