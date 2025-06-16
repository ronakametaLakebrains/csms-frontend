import React from "react";
import styled from "styled-components";
import { Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pagenotfound from "../assets/page_not_found.png"

// Styled Components
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px; 
`;

const StyledBox = styled(Box)`
  text-align: center;
  width: 70%; 
  max-width: 500px;
  background: white;
`;

const Img = styled.img`
  max-width: 70%; 
  height: auto;
  margin-top: -30px;
  margin-bottom: -30px;
`;

const StyledTypography = styled(Typography)`
  font-size: clamp(1.75rem, 3.5vw, 2.5rem); 
  font-weight: 600; 
  color: #222; 
  text-align: center; 
  line-height: 1.3; 
`;

const StyledButton = styled(Button)`
  background-color: #c62828;
  color: white;
  padding: 10px;
  font-size: 1.7rem;
  font-weight: bold;
  width: 90%;
  max-width: 12rem; 
  border-radius: 8px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #b71c1c;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledContainer maxWidth="sm">
      <StyledBox>
        <StyledTypography variant="h6">Oops! Page Not Found</StyledTypography>
          <Img src={pagenotfound} alt="Page Not Found" />
        <StyledButton variant="contained" onClick={() => navigate(-1)}>
          Go Back
        </StyledButton>
      </StyledBox>
    </StyledContainer>
  );
}

export default PageNotFound;
