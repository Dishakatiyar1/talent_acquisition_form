import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  basicDetails: {
    name: "",
    email: "",
    mobile: "",
    dob: "",
  },
  documentCollection: {
    class10: "",
    class12: "",
    graduation: "",
    postGraduation: "",
    resume: "",
  },
  statementOfPurpose: {
    question1: "",
    question2: "",
    question3: "",
  },
  interviewAvailability: {
    email: "",
    location: "",
    interviewDate: "",
    interviewTime: "",
    timeZone: "",
    interviewMedium: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateBasicDetails: (state, action) => {
      state.basicDetails = {...state.basicDetails, ...action.payload};
    },
    updateDocumentCollection: (state, action) => {
      state.documentCollection = {
        ...state.documentCollection,
        ...action.payload,
      };
    },
    updateStatementOfPurpose: (state, action) => {
      state.statementOfPurpose = {
        ...state.statementOfPurpose,
        ...action.payload,
      };
    },
    updateInterviewAvailability: (state, action) => {
      state.interviewAvailability = {
        ...state.interviewAvailability,
        ...action.payload,
      };
    },
  },
});

export const {
  updateBasicDetails,
  updateDocumentCollection,
  updateStatementOfPurpose,
  updateInterviewAvailability,
} = formSlice.actions;

export default formSlice.reducer;
