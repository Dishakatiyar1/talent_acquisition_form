import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TextField, Button, Grid, Typography, Box} from "@mui/material";
import {updateBasicDetails} from "../redux/slices/formSlice";
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

const BasicDetailsForm = ({handleNext}) => {
  const dispatch = useDispatch();
  const basicDetails = useSelector(state => state.form.basicDetails);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const {name, value} = e.target;
    dispatch(updateBasicDetails({[name]: value}));
    if (errors[name]) {
      setErrors(prevErrors => ({...prevErrors, [name]: ""}));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newErrors = {};
    if (!basicDetails.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!basicDetails.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    handleNext();
  };

  return (
    <FormContainer>
      <Typography variant="h5" align="center" gutterBottom>
        Basic Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              value={basicDetails.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              value={basicDetails.email}
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
              name="mobile"
              label="Mobile Number"
              value={basicDetails.mobile}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="dob"
              label="Date of Birth"
              type="date"
              value={basicDetails.dob}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{shrink: true}}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{mt: 2}}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default BasicDetailsForm;
