// import {
//   Box,
//   Stepper,
//   Step,
//   StepLabel,
//   TextField,
//   Button,
//   Grid,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
//   FormGroup,
//   Checkbox,
//   Snackbar,
//   Alert,
//   Typography,
//   MenuItem,
//   InputAdornment,
//   Paper,
// } from "@mui/material";
// import { useState } from "react";
// import {
//   User,
//   Settings,
//   MessageSquare,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   DollarSign,
//   Heart,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const steps = [
//   { label: "Personal Info", icon: <User size={18} /> },
//   { label: "Preferences", icon: <Settings size={18} /> },
//   { label: "Feedback", icon: <MessageSquare size={18} /> },
// ];

// const clothingPrefs = ["Partywear", "Ethnic", "Office", "Casual", "Wedding"];
// const frequencies = ["Once", "Weekly", "Monthly", "Occasionally"];

// const StylishForm = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     gender: "",
//     location: "",
//     clothingPrefs: [],
//     rentalFreq: "",
//     budget: "",
//     feedback: "",
//   });
//   const [open, setOpen] = useState(false);

//   const handleNext = () => setActiveStep((prev) => prev + 1);
//   const handleBack = () => setActiveStep((prev) => prev - 1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   const handleCheckboxChange = (pref) => {
//     const updated = formData.clothingPrefs.includes(pref)
//       ? formData.clothingPrefs.filter((p) => p !== pref)
//       : [...formData.clothingPrefs, pref];
//     setFormData((data) => ({ ...data, clothingPrefs: updated }));
//   };

//   const handleSubmit = () => {
//     console.log(formData);
//     setOpen(true);
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       age: "",
//       gender: "",
//       location: "",
//       clothingPrefs: [],
//       rentalFreq: "",
//       budget: "",
//       feedback: "",
//     });
//     setActiveStep(0);
//   };

//   const gradientInputStyles = {
//     "& .MuiOutlinedInput-root": {
//       borderRadius: "12px",
//       background: "linear-gradient(135deg, #f5f7fa, #e4f0ec)",
//       boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
//     },
//     "& .MuiInputLabel-root": {
//       color: "#444",
//     },
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 850,
//         mx: "auto",
//         my: 4,
//         p: 4,
//         borderRadius: 5,
//         background: "linear-gradient(145deg, #f3f4f6, #ffffff)",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//       }}
//     >
//       <Typography
//         variant="h4"
//         align="center"
//         mb={4}
//         sx={{
//           fontWeight: "bold",
//           background: "linear-gradient(45deg, #6a11cb, #2575fc)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//         }}
//       >
//         Clothiz Fashion Feedback
//       </Typography>

//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((step, index) => (
//           <Step key={index}>
//             <StepLabel icon={step.icon}>{step.label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       <Box
//         component={motion.div}
//         mt={4}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         {activeStep === 0 && (
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <User size={18} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={gradientInputStyles}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Mail size={18} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={gradientInputStyles}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Phone size={18} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={gradientInputStyles}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 type="number"
//                 label="Age"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Calendar size={18} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={gradientInputStyles}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormLabel component="legend">Gender</FormLabel>
//               <RadioGroup
//                 row
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <FormControlLabel
//                   value="Male"
//                   control={<Radio color="primary" />}
//                   label="👦 Male"
//                 />
//                 <FormControlLabel
//                   value="Female"
//                   control={<Radio color="secondary" />}
//                   label="👧 Female"
//                 />
//                 <FormControlLabel
//                   value="Other"
//                   control={<Radio color="success" />}
//                   label="🌈 Other"
//                 />
//               </RadioGroup>
//             </Grid>
//           </Grid>
//         )}

//         {activeStep === 1 && (
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <MapPin size={18} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={gradientInputStyles}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormLabel>Clothing Preferences</FormLabel>
//               <FormGroup row>
//                 {clothingPrefs.map((pref) => (
//                   <FormControlLabel
//                     key={pref}
//                     control={
//                       <Checkbox
//                         checked={formData.clothingPrefs.includes(pref)}
//                         onChange={() => handleCheckboxChange(pref)}
//                         sx={{
//                           color: "#6a11cb",
//                           "&.Mui-checked": { color: "#2575fc" },
//                         }}
//                       />
//                     }
//                     label={pref}
//                   />
//                 ))}
//               </FormGroup>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 select
//                 fullWidth
//                 label="Rental Frequency"
//                 name="rentalFreq"
//                 value={formData.rentalFreq}
//                 onChange={handleChange}
//                 sx={gradientInputStyles}
//               >
//                 {frequencies.map((freq) => (
//                   <MenuItem key={freq} value={freq}>
//                     {freq}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Your Budget (₹)"
//                 name="budget"
//                 value={formData.budget}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <DollarSign size={18} />
//                     </InputAdornment>
//                   ),
//                 }}
//                 sx={gradientInputStyles}
//               />
//             </Grid>
//           </Grid>
//         )}

//         {activeStep === 2 && (
//           <Paper
//             elevation={3}
//             sx={{
//               p: 3,
//               borderRadius: "15px",
//               background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
//             }}
//           >
//             <Typography gutterBottom variant="h6">
//               💬 Share your thoughts
//             </Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={5}
//               placeholder="Let us know how we can improve your experience..."
//               name="feedback"
//               value={formData.feedback}
//               onChange={handleChange}
//               sx={gradientInputStyles}
//             />
//           </Paper>
//         )}

//         <Box mt={4} display="flex" justifyContent="space-between">
//           <Button
//             variant="outlined"
//             onClick={handleBack}
//             disabled={activeStep === 0}
//           >
//             Back
//           </Button>
//           {activeStep === steps.length - 1 ? (
//             <Button
//               variant="contained"
//               onClick={handleSubmit}
//               sx={{
//                 background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//                 color: "#fff",
//                 "&:hover": {
//                   background: "linear-gradient(45deg, #005bea, #00c6ff)",
//                 },
//               }}
//             >
//               Submit ❤️
//             </Button>
//           ) : (
//             <Button
//               variant="contained"
//               onClick={handleNext}
//               sx={{
//                 background: "linear-gradient(45deg, #fc466b, #3f5efb)",
//                 color: "#fff",
//                 "&:hover": {
//                   background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
//                 },
//               }}
//             >
//               Next →
//             </Button>
//           )}
//         </Box>
//       </Box>

//       <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={() => setOpen(false)}
//       >
//         <Alert severity="success" sx={{ width: "100%" }}>
//           🌟 Thank you for your style feedback!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default StylishForm;

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Checkbox,
  Snackbar,
  Alert,
  Typography,
  MenuItem,
  InputAdornment,
  Paper,
} from "@mui/material";
import { useState } from "react";
import {
  User,
  Settings,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { label: "Personal Info", icon: <User size={18} /> },
  { label: "Preferences", icon: <Settings size={18} /> },
  { label: "Feedback", icon: <MessageSquare size={18} /> },
];

const clothingPrefs = ["Partywear", "Ethnic", "Office", "Casual", "Wedding"];
const frequencies = ["Once", "Weekly", "Monthly", "Occasionally"];

const StylishForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    location: "",
    clothingPrefs: [],
    rentalFreq: "",
    budget: "",
    feedback: "",
  });
  const [open, setOpen] = useState(false);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleCheckboxChange = (pref) => {
    const updated = formData.clothingPrefs.includes(pref)
      ? formData.clothingPrefs.filter((p) => p !== pref)
      : [...formData.clothingPrefs, pref];
    setFormData((data) => ({ ...data, clothingPrefs: updated }));
  };

  const handleSubmit = () => {
    console.log(formData);
    setOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      location: "",
      clothingPrefs: [],
      rentalFreq: "",
      budget: "",
      feedback: "",
    });
    setActiveStep(0);
  };

  const darkInputStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      background: "rgba(255,255,255,0.05)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.08)",
      "& input": { color: "#fff" },
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.2)",
      },
      "&:hover fieldset": {
        borderColor: "#FFD700",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#ccc",
    },
    "& .Mui-focused .MuiInputLabel-root": {
      color: "#FFD700",
    },
  };

  return (
    <Box
      sx={{
        maxWidth: 850,
        mx: "auto",
        my: 6,
        p: 4,
        borderRadius: 5,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        mb={4}
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, #ffffff, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Clothiz Fashion Feedback
      </Typography>

      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          "& .MuiStepIcon-root.Mui-completed": { color: "#FFD700" },
          "& .MuiStepIcon-root.Mui-active": { color: "#FFD700" },
        }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel icon={step.icon}>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        component={motion.div}
        mt={4}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {activeStep === 0 && (
          <Grid container spacing={2}>
            {[
              { label: "Full Name", name: "name", icon: <User size={18} /> },
              { label: "Email", name: "email", icon: <Mail size={18} /> },
              { label: "Phone", name: "phone", icon: <Phone size={18} /> },
              { label: "Age", name: "age", icon: <Calendar size={18} /> },
            ].map((field, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {field.icon}
                      </InputAdornment>
                    ),
                  }}
                  sx={darkInputStyles}
                  type={field.name === "age" ? "number" : "text"}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <FormLabel component="legend" sx={{ color: "#FFD700" }}>
                Gender
              </FormLabel>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                {["Male", "Female", "Other"].map((gender) => (
                  <FormControlLabel
                    key={gender}
                    value={gender}
                    control={<Radio sx={{ color: "#FFD700" }} />}
                    label={gender}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        )}

        {activeStep === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MapPin size={18} />
                    </InputAdornment>
                  ),
                }}
                sx={darkInputStyles}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel sx={{ color: "#FFD700" }}>
                Clothing Preferences
              </FormLabel>
              <FormGroup row>
                {clothingPrefs.map((pref) => (
                  <FormControlLabel
                    key={pref}
                    control={
                      <Checkbox
                        checked={formData.clothingPrefs.includes(pref)}
                        onChange={() => handleCheckboxChange(pref)}
                        sx={{
                          color: "#FFD700",
                          "&.Mui-checked": { color: "#FFD700" },
                        }}
                      />
                    }
                    label={pref}
                  />
                ))}
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Rental Frequency"
                name="rentalFreq"
                value={formData.rentalFreq}
                onChange={handleChange}
                sx={darkInputStyles}
              >
                {frequencies.map((freq) => (
                  <MenuItem key={freq} value={freq}>
                    {freq}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Budget (₹)"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DollarSign size={18} />
                    </InputAdornment>
                  ),
                }}
                sx={darkInputStyles}
              />
            </Grid>
          </Grid>
        )}

        {activeStep === 2 && (
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: "15px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography gutterBottom variant="h6" sx={{ color: "#FFD700" }}>
              💬 Share your thoughts
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="Let us know how we can improve your experience..."
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              sx={darkInputStyles}
            />
          </Paper>
        )}

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              borderColor: "#FFD700",
              color: "#FFD700",
              "&:hover": {
                backgroundColor: "#FFD70022",
              },
            }}
          >
            Back
          </Button>

          <Button
            variant="contained"
            onClick={
              activeStep === steps.length - 1 ? handleSubmit : handleNext
            }
            sx={{
              background: "linear-gradient(90deg, #FFD700, #ffcc00)",
              color: "#000",
              "&:hover": {
                background: "linear-gradient(90deg, #ffdd33, #FFD700)",
              },
            }}
          >
            {activeStep === steps.length - 1 ? "Submit ❤️" : "Next →"}
          </Button>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity="success"
          sx={{
            backgroundColor: "#0e0e1a",
            color: "#FFD700",
            border: "1px solid #FFD70088",
            boxShadow: "0 0 10px #FFD70033",
          }}
        >
          🌟 Thank you for your style feedback!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default StylishForm;
