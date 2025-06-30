// // src/components/FeedbackForm.jsx
// import { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   MenuItem,
//   Typography,
//   Grid,
//   Checkbox,
//   FormControlLabel,
//   FormGroup,
//   Snackbar,
//   Alert,
//   Radio,
//   RadioGroup,
//   FormLabel,
// } from "@mui/material";

// const preferences = ["Partywear", "Ethnic", "Office", "Casual", "Wedding"];
// const frequencies = ["Once", "Weekly", "Monthly", "Occasionally"];

// const FeedbackForm = () => {
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = (pref) => {
//     const updatedPrefs = formData.clothingPrefs.includes(pref)
//       ? formData.clothingPrefs.filter((item) => item !== pref)
//       : [...formData.clothingPrefs, pref];
//     setFormData({ ...formData, clothingPrefs: updatedPrefs });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
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
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 800,
//         mx: "auto",
//         my: 4,
//         p: 4,
//         bgcolor: "background.paper",
//         borderRadius: 3,
//         boxShadow: 3,
//       }}
//     >
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Age"
//             name="age"
//             type="number"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormLabel>Gender</FormLabel>
//           <RadioGroup
//             row
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//           >
//             <FormControlLabel value="Male" control={<Radio />} label="Male" />
//             <FormControlLabel
//               value="Female"
//               control={<Radio />}
//               label="Female"
//             />
//             <FormControlLabel value="Other" control={<Radio />} label="Other" />
//           </RadioGroup>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Location"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <FormLabel>Clothing Preferences</FormLabel>
//           <FormGroup row>
//             {preferences.map((pref) => (
//               <FormControlLabel
//                 key={pref}
//                 control={
//                   <Checkbox
//                     checked={formData.clothingPrefs.includes(pref)}
//                     onChange={() => handleCheckboxChange(pref)}
//                   />
//                 }
//                 label={pref}
//               />
//             ))}
//           </FormGroup>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             select
//             label="Rental Frequency"
//             name="rentalFreq"
//             value={formData.rentalFreq}
//             onChange={handleChange}
//             required
//           >
//             {frequencies.map((freq) => (
//               <MenuItem key={freq} value={freq}>
//                 {freq}
//               </MenuItem>
//             ))}
//           </TextField>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Budget"
//             name="budget"
//             value={formData.budget}
//             onChange={handleChange}
//             required
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             multiline
//             rows={4}
//             label="Additional Feedback"
//             name="feedback"
//             value={formData.feedback}
//             onChange={handleChange}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button variant="contained" type="submit" fullWidth>
//             Submit Feedback
//           </Button>
//         </Grid>
//       </Grid>
//       <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={() => setOpen(false)}
//       >
//         <Alert
//           onClose={() => setOpen(false)}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           Thank you for your feedback!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default FeedbackForm;

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Snackbar,
  Alert,
  Radio,
  RadioGroup,
  FormLabel,
  Paper,
} from "@mui/material";

const preferences = ["Partywear", "Ethnic", "Office", "Casual", "Wedding"];
const frequencies = ["Once", "Weekly", "Monthly", "Occasionally"];

const FeedbackForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (pref) => {
    const updatedPrefs = formData.clothingPrefs.includes(pref)
      ? formData.clothingPrefs.filter((item) => item !== pref)
      : [...formData.clothingPrefs, pref];
    setFormData({ ...formData, clothingPrefs: updatedPrefs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <Paper
      elevation={4}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 900,
        mx: "auto",
        p: { xs: 3, md: 5 },
        borderRadius: 4,
        backgroundColor: "#ffffff",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <FormLabel component="legend">Clothing Preferences</FormLabel>
          <FormGroup row>
            {preferences.map((pref) => (
              <FormControlLabel
                key={pref}
                control={
                  <Checkbox
                    checked={formData.clothingPrefs.includes(pref)}
                    onChange={() => handleCheckboxChange(pref)}
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
            required
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
            label="Budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Additional Feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth sx={{ py: 1.2 }}>
            Submit Feedback
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default FeedbackForm;
