import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import {updateInterviewAvailability} from "../redux/slices/formSlice";
import {styled} from "@mui/system";

const FormContainer = styled(Box)({
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  marginTop: "40px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const InterviewAvailabilityForm = ({handleNext, handleBack}) => {
  const dispatch = useDispatch();
  const interviewAvailability = useSelector(
    state => state.form.interviewAvailability
  );
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const {name, value} = e.target;
    dispatch(updateInterviewAvailability({[name]: value}));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!interviewAvailability.email)
      newErrors.email = "This field is required";
    if (!interviewAvailability.location)
      newErrors.location = "This field is required";
    if (!interviewAvailability.interviewDate)
      newErrors.interviewDate = "This field is required";
    if (!interviewAvailability.interviewTime)
      newErrors.interviewTime = "This field is required";
    if (!interviewAvailability.timeZone)
      newErrors.timeZone = "This field is required";
    if (!interviewAvailability.interviewMedium)
      newErrors.interviewMedium = "This field is required";
    return newErrors;
  };

  const handleNextClick = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      handleNext();
    } else {
      setErrors(validationErrors);
    }
  };

  const timeZones = ["GMT", "PST", "EST"];
  const interviewMediums = ["In-Person", "Phone", "Video"];

  return (
    <FormContainer>
      <Typography variant="h5" align="center" gutterBottom>
        Interview Availability
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              value={interviewAvailability.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="location"
              label="Location"
              value={interviewAvailability.location}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!errors.location}
              helperText={errors.location}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="interviewDate"
              label="Interview Date"
              type="date"
              value={interviewAvailability.interviewDate}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              InputLabelProps={{shrink: true}}
              error={!!errors.interviewDate}
              helperText={errors.interviewDate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="interviewTime"
              label="Interview Time"
              type="time"
              value={interviewAvailability.interviewTime}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              InputLabelProps={{shrink: true}}
              error={!!errors.interviewTime}
              helperText={errors.interviewTime}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="timeZone"
              label="Time Zone"
              value={interviewAvailability.timeZone}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              select
              error={!!errors.timeZone}
              helperText={errors.timeZone}
            >
              {timeZones.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="interviewMedium"
              label="Interview Medium"
              value={interviewAvailability.interviewMedium}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              select
              error={!!errors.interviewMedium}
              helperText={errors.interviewMedium}
            >
              {interviewMediums.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBack}
              fullWidth
              sx={{mt: 2}}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextClick}
              fullWidth
              sx={{mt: 2}}
            >
              Finish
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default InterviewAvailabilityForm;
