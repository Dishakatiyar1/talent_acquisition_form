import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {TextField, Button, Grid, Typography, Box} from "@mui/material";
import {updateDocumentCollection} from "../redux/slices/formSlice";
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

const DocumentCollectionForm = ({handleNext, handleBack}) => {
  const dispatch = useDispatch();
  const documentCollection = useSelector(
    state => state.form.documentCollection
  );
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const {name, files} = e.target;
    dispatch(updateDocumentCollection({[name]: files[0]}));
  };

  const validateFields = () => {
    const newErrors = {};
    if (!documentCollection.class10)
      newErrors.class10 = "Class 10 Marksheet is required";
    if (!documentCollection.class12)
      newErrors.class12 = "Class 12 Marksheet is required";
    if (!documentCollection.graduation)
      newErrors.graduation = "Graduation Marksheet is required";
    if (!documentCollection.resume) newErrors.resume = "Resume/CV is required";
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
        Document Collection
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="class10"
              label="Class 10 Marksheet"
              type="file"
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!errors.class10}
              helperText={errors.class10}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="class12"
              label="Class 12 Marksheet"
              type="file"
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!errors.class12}
              helperText={errors.class12}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="graduation"
              label="Graduation Marksheet"
              type="file"
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!errors.graduation}
              helperText={errors.graduation}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="postGraduation"
              label="Post Graduation Marksheet"
              type="file"
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="resume"
              label="Resume/CV"
              type="file"
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!errors.resume}
              helperText={errors.resume}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="recommendationLetter"
              label="Recommendation Letter"
              type="file"
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="salarySlips"
              label="Salary Slips"
              type="file"
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="others"
              label="Others"
              type="file"
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
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

export default DocumentCollectionForm;
