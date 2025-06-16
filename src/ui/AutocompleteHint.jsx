import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export default function AutocompleteHint({ label, options }) {
  const hint = React.useRef("");
  const [inputValue, setInputValue] = React.useState("");

  return (
    <StyledAutocomplete
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          if (hint.current) {
            setInputValue(hint.current);
            event.preventDefault();
          }
        }
      }}
      onClose={() => {
        hint.current = "";
      }}
      onChange={(event, newValue) => {
        setInputValue(newValue && newValue.label ? newValue.label : "");
      }}
      disablePortal
      inputValue={inputValue}
      id="combo-box-hint-demo"
      options={options}
      renderInput={(params) => {
        return (
          <StyledBox>
            <HintTypography>{hint.current}</HintTypography>
            <StyledTextField
              {...params}
              onChange={(event) => {
                const newValue = event.target.value;
                setInputValue(newValue);
                const matchingOption = options.find((option) =>
                  option.label.startsWith(newValue)
                );

                if (newValue && matchingOption) {
                  hint.current = matchingOption.label;
                } else {
                  hint.current = "";
                }
              }}
              label={label}
            />
          </StyledBox>
        );
      }}
    />
  );
}

// Styled Components
const StyledAutocomplete = styled(Autocomplete)`
  width: 250px;
`;

const StyledBox = styled(Box)`
  position: relative;
`;

const HintTypography = styled(Typography)`
  position: absolute;
  opacity: 0.5;
  left: 14px;
  top: 16px;
  overflow: hidden;
  white-space: nowrap;
  width: calc(100% - 75px);
`;

const StyledTextField = styled(TextField)`
  background-color: white;
  height: 40px; /* Set a consistent height for the input */

  & .MuiInputBase-root {
    height: 40px; /* Ensures the input is the same height as the TextField */
  }

  .MuiInputBase-input {
    font-size: 1.3rem;
    padding: 10px 12px; /* Adjust padding for proper alignment */
  }

  .MuiInputLabel-root {
    color: #666;
    font-weight: 100; /* Medium weight for labels */
    font-size: 1.3rem;
    top: 50%; /* Center vertically */
    transform: translateY(-50%); /* Ensure the label is vertically centered */
    transition: all 0.2s ease-in-out;
    margin-left: 10px; /* Smooth transition for focus effect */
  }

  .MuiInputLabel-root.Mui-focused,
  .MuiInputLabel-root.MuiFormLabel-filled {
    color: #333;
    top: -8px; /* Move label above when focused */
    transform: translateY(0); /* Reset transform when focused */
    font-size: 1rem; /* Slightly smaller font size for focused state */
  }

  .MuiOutlinedInput-root {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #cccccc79;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #ccc;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #333; /* Dark color for focused border */
  }
`;
