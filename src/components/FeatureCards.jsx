// // src/components/FeatureCards.jsx
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const features = [
//   { title: "Affordable Fashion", icon: "💰" },
//   { title: "Wide Variety", icon: "👗" },
//   { title: "Eco-Friendly Choices", icon: "🌿" },
//   { title: "Quick Delivery & Return", icon: "🚚" },
//   { title: "Easy Rental Plans", icon: "📅" },
// ];

// const FeatureCards = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Grid
//       container
//       spacing={isMobile ? 2 : 3}
//       justifyContent="center"
//       px={3}
//       py={5}
//     >
//       {features.map((feature, idx) => (
//         <Grid item xs={12} sm={6} md={4} key={idx}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card
//               elevation={3}
//               sx={{
//                 textAlign: "center",
//                 py: 4,
//                 borderRadius: 4,
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 "&:hover": {
//                   transform: "translateY(-8px)",
//                   boxShadow: 6,
//                 },
//               }}
//             >
//               <CardContent>
//                 <Box fontSize={36} mb={1}>
//                   <motion.div whileHover={{ scale: 1.3 }}>
//                     {feature.icon}
//                   </motion.div>
//                 </Box>
//                 <Typography variant="h6" fontWeight="medium">
//                   {feature.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default FeatureCards;

// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const features = [
//   { title: "Affordable Fashion", icon: "💰" },
//   { title: "Wide Variety", icon: "👗" },
//   { title: "Eco-Friendly Choices", icon: "🌿" },
//   { title: "Quick Delivery & Return", icon: "🚚" },
//   { title: "Easy Rental Plans", icon: "📅" },
// ];

// const FeatureCards = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box sx={{ px: 3, py: isMobile ? 4 : 6, backgroundColor: "#fdfdfd" }}>
//       <Grid container spacing={isMobile ? 2 : 3} justifyContent="center">
//         {features.map((feature, idx) => (
//           <Grid item xs={12} sm={6} md={4} key={idx}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//             >
//               <Card
//                 sx={{
//                   textAlign: "center",
//                   py: 3,
//                   px: 2,
//                   borderRadius: 4,
//                   background: "linear-gradient(to bottom right, #fff, #f9f9f9)",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//                   border: "1px solid #e0e0e0",
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                   "&:hover": {
//                     transform: "translateY(-6px)",
//                     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//                   },
//                 }}
//               >
//                 <CardContent>
//                   <Box
//                     fontSize={40}
//                     mb={1.5}
//                     component={motion.div}
//                     whileHover={{ scale: 1.2 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     {feature.icon}
//                   </Box>
//                   <Typography
//                     variant="h6"
//                     fontWeight="600"
//                     sx={{ fontSize: isMobile ? "1rem" : "1.1rem" }}
//                   >
//                     {feature.title}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default FeatureCards;

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { DollarSign, Shirt, Leaf, Truck, CalendarCheck } from "lucide-react";

const features = [
  { title: "Affordable Fashion", icon: <DollarSign size={28} /> },
  { title: "Wide Variety", icon: <Shirt size={28} /> },
  { title: "Eco-Friendly Choices", icon: <Leaf size={28} /> },
  { title: "Quick Delivery & Return", icon: <Truck size={28} /> },
  { title: "Easy Rental Plans", icon: <CalendarCheck size={28} /> },
];

const FeatureCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ px: 3, py: isMobile ? 4 : 6 }}>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        fontWeight="bold"
        align="center"
        mb={4}
      >
        <span style={{ color: "#fdfdfd" }}>Why Choose</span>  <span style={{ color: "#FFD700" }}>Clothiz</span>
      </Typography>

      <Grid container spacing={isMobile ? 2 : 3} justifyContent="center">
        {features.map((feature, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ height: "100%" }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: "24px",
                  background: "linear-gradient(to bottom right, #fff, #f9f9f9)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  border: "1px solid #e0e0e0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      backgroundColor: "#FFD700",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ fontSize: isMobile ? "1rem" : "1.1rem" }}
                  >
                    {feature.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCards;
