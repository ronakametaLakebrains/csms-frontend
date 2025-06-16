import React from "react";
import styled, { keyframes } from "styled-components";

const Error = ({ error, children }) => {
  // Use error.message if available, otherwise fallback to children or default message.
  const errorMessage =
    (error && error.message) ||
    children ||
    "Please try again later or contact support.";

  return (
    <StyledError>
      <ErrorContent>
        <AnimatedCircle>
          <CrossLine />
          <CrossLine rotate />
        </AnimatedCircle>
        <ErrorTitle>Oops! Something Went Wrong</ErrorTitle>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorContent>
    </StyledError>
  );
};

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78vh;
  font-family: "Arial", sans-serif;
`;

const ErrorContent = styled.div`
  text-align: center;
  padding: 40px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
`;

const AnimatedCircle = styled.div`
  width: 80px;
  height: 80px;
  border: 5px solid #e63946;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  animation: ${bounce} 1.2s infinite;
`;

const CrossLine = styled.div`
  position: absolute;
  background-color: #e63946;
  width: 50px;
  height: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    ${({ rotate }) => (rotate ? "rotate(90deg)" : "rotate(0deg)")};
  border-radius: 2px;
`;

const ErrorTitle = styled.h1`
  color: #e63946;
  font-size: 2.5rem;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: #333;
  font-size: 1.6rem;
  text-transform: capitalize;
`;

export default Error;
