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
} from "@mui/material";
import { useState } from "react";
import { User, Settings, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { label: "Personal Info", icon: <User size={18} /> },
  { label: "Preferences", icon: <Settings size={18} /> },
  { label: "Feedback", icon: <MessageSquare size={18} /> },
];

const clothingPrefs = ["Partywear", "Ethnic", "Office", "Casual", "Wedding"];
const frequencies = ["Once", "Weekly", "Monthly", "Occasionally"];

const StepForm = () => {
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

  return (
    <Box
      sx={{
        maxWidth: 850,
        mx: "auto",
        my: 4,
        p: 4,
        borderRadius: 5,
        background: "linear-gradient(145deg, #e0f7fa, #f1f8e9)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        mb={4}
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(45deg, #00bcd4, #4caf50)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Clothiz - Rental Experience Form
      </Typography>

      <Stepper activeStep={activeStep} alternativeLabel>
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
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
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
                <FormControlLabel
                  value="Male"
                  control={<Radio color="primary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio color="secondary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio color="success" />}
                  label="Other"
                />
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
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Clothing Preferences</FormLabel>
              <FormGroup row>
                {clothingPrefs.map((pref) => (
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
                label="Budget (₹)"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        )}

        {activeStep === 2 && (
          <Box>
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Tell us what you feel about Clothiz"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
            />
          </Box>
        )}

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                background: "linear-gradient(45deg, #4caf50, #81c784)",
                color: "#fff",
                "&:hover": {
                  background: "linear-gradient(45deg, #388e3c, #66bb6a)",
                },
              }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                background: "linear-gradient(45deg, #00bcd4, #4fc3f7)",
                color: "#fff",
                "&:hover": {
                  background: "linear-gradient(45deg, #0288d1, #03a9f4)",
                },
              }}
            >
              Next
            </Button>
          )}
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          🎉 Thank you for your feedback!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default StepForm;
