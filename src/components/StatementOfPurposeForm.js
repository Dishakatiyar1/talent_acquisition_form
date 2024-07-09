import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TextField, Button, Grid, Typography, Box} from "@mui/material";
import {updateStatementOfPurpose} from "../redux/slices/formSlice";
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

const StatementOfPurposeForm = ({handleNext, handleBack}) => {
  const dispatch = useDispatch();
  const statementOfPurpose = useSelector(
    state => state.form.statementOfPurpose
  );
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const {name, value} = e.target;
    dispatch(updateStatementOfPurpose({[name]: value}));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!statementOfPurpose.question1)
      newErrors.question1 = "This field is required";
    if (!statementOfPurpose.question2)
      newErrors.question2 = "This field is required";
    if (!statementOfPurpose.question3)
      newErrors.question3 = "This field is required";
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

  return (
    <FormContainer>
      <Typography variant="h5" align="center" gutterBottom>
        Statement of Purpose
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="question1"
              label="Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?"
              value={statementOfPurpose.question1}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              multiline
              rows={4}
              inputProps={{maxLength: 300}}
              error={!!errors.question1}
              helperText={errors.question1}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="question2"
              label="Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?"
              value={statementOfPurpose.question2}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              multiline
              rows={4}
              inputProps={{maxLength: 300}}
              error={!!errors.question2}
              helperText={errors.question2}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="question3"
              label="What are the three things that are most important to you in a job?"
              value={statementOfPurpose.question3}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              multiline
              rows={4}
              inputProps={{maxLength: 300}}
              error={!!errors.question3}
              helperText={errors.question3}
            />
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
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default StatementOfPurposeForm;
