import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

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
  <Box sx={{ backgroundColor: "#fdfdfd", py: { xs: 5, md: 8 }, px: 2 }}>
    <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
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
        <Box key={idx} sx={{ textAlign: "center", px: 2 }}>
          <Box
            sx={{
              maxWidth: 650,
              mx: "auto",
              p: 4,
              backgroundColor: "#fff",
              borderRadius: 4,
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <Typography variant="h6" fontWeight={700} color="primary" mb={1}>
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", color: "#555", lineHeight: 1.6 }}
            >
              “{item.feedback}”
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  </Box>
);

export default CustomerNeedsSlider;
