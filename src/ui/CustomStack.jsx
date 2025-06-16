import React from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

// Styled Stack using MUI's styled utility
const StyledStack = styled(({ customStyles, ...rest }) => <Stack {...rest} />)(
  ({ theme, customStyles }) => ({
    ...customStyles,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    padding: 0,
    marginBottom: "5px",
    marginTop: "10px",
    // backgroundColor: "red",
    // Add any additional styling here
  })
);

/**
 * CustomStack Component
 * @param {object} props - Component properties
 * @param {string} props.direction - Stack direction ('row' | 'column')
 * @param {string} props.spacing - Spacing between children
 * @param {object} props.customStyles - Custom styles to override default styling
 * @param {React.ReactNode} props.children - Children nodes to render within the stack
 */
const CustomStack = ({
  direction = "row",
  spacing = 2,
  customStyles = {},
  children,
  ...rest
}) => {
  return (
    <StyledStack
      direction={direction}
      spacing={spacing}
      customStyles={customStyles}
      {...rest}
    >
      {children}
    </StyledStack>
  );
};

CustomStack.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  spacing: PropTypes.number,
  customStyles: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default CustomStack;
