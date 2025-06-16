import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../ui/SpinnerMini";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Reset Email Sent To:", data.email);
    // You can add your API call logic here if needed
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/reset-password");
    }, 1000); // Simulating API delay
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledInnerBox>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "#e23744",
            fontSize: "5vh",
            fontWeight: 600,
            fontFamily: "'Roboto Serif', serif",
            mb: 3,
            textAlign: "center",
          }}
        >
          LakeBrains CMS
        </Typography>

        <StyledBox>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            style={{ color: "#000000" }}
            sx={{ fontSize: "3vh" }}
          >
            Forgot Password ?
          </Typography>

          <Typography
            variant="h5"
            component="h1"
            mt={2}
            style={{ color: "#676666" }}
            gutterBottom
            sx={{ fontSize: "2vh" }}
          >
            Enter your registered email ID to reset the password.
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledTextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <StyledButton1 type="submit" variant="contained" fullWidth disabled={loading}>
              {loading ? <SpinnerMini /> : "Send"}
            </StyledButton1>

            <StyledButton2 type="button" variant="contained" fullWidth disabled={loading} onClick={() => navigate(-1)}>
              {loading ? <SpinnerMini /> : "Back"}
            </StyledButton2>
          </form>
        </StyledBox>
      </StyledInnerBox>
    </StyledContainer>
  );
};

export default ForgotPasswordPage;

// Styled Components
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledInnerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBox = styled(Box)`
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
  & .MuiInputLabel-root {
    font-weight: 500;
  }
`;

const StyledButton1 = styled(Button)`
  background-color: #bd2a2e;
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  width: 250px;
  margin-top: 20px;

  &:hover {
    background-color: #bd3e41;
  }
`;

const StyledButton2 = styled(Button)`
  background-color: rgb(255, 255, 255);
  color: black;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  width: 250px;
  margin-top: 20px;

  &:hover {
    background-color: rgb(255, 255, 255);
  }
`;
