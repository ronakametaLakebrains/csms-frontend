import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

// Styled component for the custom input field
const CustomStyledInput = styled(TextField)`
  width: 70%;

  .MuiInputLabel-root {
    color: #666; /* Light grey for labels */
    font-weight: 100; /* Medium weight for labels */
    font-size: 1.3rem;
    top: 50%; /* Center vertically */
    transform: translateY(-50%); /* Adjust for perfect centering */
    transition: all 0.2s ease-in-out; /* Smooth transition for focus effect */
    margin-left: 10px;
  }

  .MuiOutlinedInput-root {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #cccccc79;
    height: 40px; /* Adjust height to be a little smaller */
    .MuiInputBase-input {
      font-size: 1.3rem; /* Increase font size of input value */
    }
  }

  .MuiInputLabel-root.Mui-focused,
  .MuiInputLabel-root.MuiFormLabel-filled {
    top: 0; /* Move label to the top */
    transform: translateY(-100%); /* Adjust for perfect centering */
    font-size: 1rem; /* Adjust font size when focused */
    font-weight: 400; /* Adjust font weight when focused */
  }
`;

const CustomInput = (props) => {
  return <CustomStyledInput {...props} variant="outlined" />;
};

export default CustomInput;
