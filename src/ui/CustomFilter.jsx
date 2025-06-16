import React, { useState, useEffect } from "react";
import { Box, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

// Define width values for each size option (same as Input component)
const sizeMap = {
  small: "200px",
  medium: "300px", // default
  large: "400px",
};

// Styled container for the dropdown filter
const FilterContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// Styled Select component that mimics the Input styling
const StyledSelect = styled(Select)`
  padding: 0.8rem 1.2rem;  
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  width: ${({ size }) => sizeMap[size] || sizeMap.medium};

  /* Set fixed height and font-size to match the Input component */
  height: ${({ size }) =>
    size === "small" ? "36px" : size === "large" ? "52px" : "44px"};
  font-size: 1rem;
  display: flex;
  align-items: center;
  
  /* Remove default underline and input styles from MUI Select */
  & .MuiSelect-select {
    padding: 0; /* already added via parent padding */
    display: flex;
    align-items: center;
    width: 100%;
  }

  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus, &.Mui-focused, &:focus-visible {
    outline: none;
    border-color: var(--color-primary, #007bff);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

// Setting default prop for size if not provided
StyledSelect.defaultProps = {
  size: "medium",
};

const DropdownFilter = ({ options, onFilter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  // Set the first option as default when the component loads
  useEffect(() => {
    if (options && options.length > 0) {
      setSelectedOption(options[0].value || options[0]);
    }
  }, [options]);

  const handleFilter = () => {
    onFilter(selectedOption);
  };

  return (
    <FilterContainer>
      <StyledSelect
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value || option}>
            {option.label || option}
          </MenuItem>
        ))}
      </StyledSelect>
      {/* Uncomment the button if you prefer manual filter application */}
      {/* <StyledButton onClick={handleFilter}>Apply Filter</StyledButton> */}
    </FilterContainer>
  );
};

export default DropdownFilter;
