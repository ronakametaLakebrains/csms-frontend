import styled from "styled-components";

// Define width values for each size option
const sizeMap = {
  small: "200px",
  medium: "300px", // default
  large: "400px",
};

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  width: ${({ size }) => sizeMap[size] || sizeMap.medium};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-primary, #007bff);
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

Input.defaultProps = {
  size: "medium",
};

export default Input;
