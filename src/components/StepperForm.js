import React, {useState} from "react";
import {Stepper, Step, StepLabel, Button, Typography, Box} from "@mui/material";
import {styled} from "@mui/system";
import BasicDetailsForm from "./BasicDetailsForm";
import DocumentCollectionForm from "./DocumentCollectionForm";
import StatementOfPurposeForm from "./StatementOfPurposeForm";
import InterviewAvailabilityForm from "./InterviewAvailabilityForm";
import Summary from "./Summary";

const StepperContainer = styled(Box)({
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

const StepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Basic Details",
    "Document Collection",
    "Statement Of Purpose",
    "Interview Availability",
  ];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StepperContainer>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Box>
          <Summary handleReset={handleReset} /> {/* Render Summary component */}
          {/* <Button variant="contained" color="primary" onClick={handleReset}>
            Reset
          </Button> */}
        </Box>
      ) : (
        <Box>
          {activeStep === 0 && <BasicDetailsForm handleNext={handleNext} />}
          {activeStep === 1 && (
            <DocumentCollectionForm
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
          {activeStep === 2 && (
            <StatementOfPurposeForm
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
          {activeStep === 3 && (
            <InterviewAvailabilityForm
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
          {/* <Box sx={{display: "flex", justifyContent: "space-between", mt: 3}}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="contained"
              color="primary"
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box> */}
        </Box>
      )}
    </StepperContainer>
  );
};

export default StepperForm;
