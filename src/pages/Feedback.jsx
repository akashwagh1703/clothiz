// // src/pages/Feedback.jsx
// import FeedbackForm from "../components/FeedbackForm";

// const Feedback = () => {
//   return (
//     <div className="container py-5">
//       <h2 className="text-center mb-4">We Value Your Feedback</h2>
//       <FeedbackForm />
//     </div>
//   );
// };

// export default Feedback;

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import StepForm from "../components/StepForm";
import StylishForm from "../components/StylishForm";
// import FeedbackForm from "../components/FeedbackForm";

const Feedback = () => {
    const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ py: { xs: 5, md: 8 }, px: 2 }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        align="center"
        mb={4}
      >
        <span style={{ color: "#fdfdfd" }}>We Value Your </span>{" "}
        <span style={{ color: "#FFD700" }}>Feedback</span>
      </Typography>
      <StylishForm />
      {/* <StepForm /> */}
      {/* <FeedbackForm /> */}
    </Box>
  );
};

export default Feedback;
