import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)`
  text-transform: none;
  font-weight: 600;
  border-radius: 8px;
  min-width: fit-content;
  line-height: 1;

  ${({ size }) =>
    size === "small"
      ? `
        height: 36px;
        font-size: 0.95rem;
      `
      : size === "large"
      ? `
        height: 40px;
        font-size: 1.2rem;
      `
      : `
        height: 38px; /* medium */
        font-size: 1.1rem;
      `};

  ${({ variant, theme, color }) =>
    variant === "contained"
      ? `
        background-color: ${
          color === "secondary"
            ? theme.palette.secondary.main
            : theme.palette.primary.main
        };
        color: ${theme.palette.primary.contrastText};
        &:hover {
          background-color: ${
            color === "secondary"
              ? theme.palette.secondary.dark
              : theme.palette.primary.dark
          };
        }
      `
      : variant === "outlined"
      ? `
        border: 2px solid ${
          color === "secondary"
            ? theme.palette.secondary.main
            : theme.palette.primary.main
        };
        color: ${
          color === "secondary"
            ? theme.palette.secondary.main
            : theme.palette.primary.main
        };
        &:hover {
          background-color: ${
            color === "secondary"
              ? theme.palette.secondary.light
              : theme.palette.primary.light
          };
        }
      `
      : `
        color: ${
          color === "secondary"
            ? theme.palette.secondary.main
            : theme.palette.primary.main
        };
      `};
`;



const CustomButton = ({
  variant = "contained",
  size = "medium",
  color = "primary",
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} color={color} {...props} />
  );
};

export default CustomButton;
