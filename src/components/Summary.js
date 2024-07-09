import React from "react";
import {useSelector} from "react-redux";
import {
  Box,
  Typography,
  Button,
  Grid,
  ListItem,
  ListItemText,
} from "@mui/material";
import {styled} from "@mui/system";

const SummaryContainer = styled(Box)({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  marginTop: "30px",
  margin: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
});

const Summary = ({handleReset}) => {
  const form = useSelector(state => state.form);

  return (
    <SummaryContainer>
      <Typography variant="h5" align="center" gutterBottom>
        Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Basic Details
          </Typography>
          <ListItem>
            <ListItemText primary={`Name: ${form.basicDetails.name}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Email: ${form.basicDetails.email}`} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Mobile Number: ${form.basicDetails.mobile}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Date of Birth: ${form.basicDetails.dob}`} />
          </ListItem>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Document Collection
          </Typography>
          {Object.keys(form.documentCollection).map(key => (
            <ListItem key={key}>
              <ListItemText
                primary={`${key}: ${
                  typeof form.documentCollection[key] === "object"
                    ? form.documentCollection[key].fileName
                    : form.documentCollection[key]
                }`}
              />
            </ListItem>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Statement Of Purpose
          </Typography>
          <ListItem>
            <ListItemText
              primary={`Question 1: ${form.statementOfPurpose.question1}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Question 2: ${form.statementOfPurpose.question2}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Question 3: ${form.statementOfPurpose.question3}`}
            />
          </ListItem>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Interview Availability
          </Typography>
          <ListItem>
            <ListItemText
              primary={`Email: ${form.interviewAvailability.email}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Location: ${form.interviewAvailability.location}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Interview Date: ${form.interviewAvailability.interviewDate}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Interview Time: ${form.interviewAvailability.interviewTime}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Time Zone: ${form.interviewAvailability.timeZone}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Interview Medium: ${form.interviewAvailability.interviewMedium}`}
            />
          </ListItem>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleReset}
        sx={{mt: 2}}
      >
        Edit
      </Button>
    </SummaryContainer>
  );
};

export default Summary;
