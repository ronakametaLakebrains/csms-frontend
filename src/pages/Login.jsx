import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/apiAuth";
import SpinnerMini from "../ui/SpinnerMini";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login: saveAuth } = useAuth(); // ✅ from AuthContext

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const { token, role, organisation_name: orgName } = data;
      console.log(role, "role", orgName, "orgName", token, "token");
      saveAuth(token, role, orgName);
      navigate("/");
    },
    onError: (err) => {
      console.error(
        "Login failed:",
        err?.response?.data?.message || err.message
      );
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginMutation.mutate(data);
  };

  return (
    <StyledContainer maxWidth="sm">
      <StyledInnerBox>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            color: "#3f51b5",
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
            sx={{ fontSize: "2.3vh" }}
          >
            Login to LakeBrains CMS Admin Panel
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

            <StyledTextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <StyledButton
              type="submit"
              variant="contained"
              fullWidth
              disabled={loginMutation.isLoading}
            >
              {loginMutation.isLoading ? <SpinnerMini /> : "Login"}
            </StyledButton>

            <Box mt={2} textAlign="center">
              <Typography color="error">
                {loginMutation.error?.response?.data?.error ||
                  loginMutation.error?.message ||
                  ""}
              </Typography>
            </Box>
            <Box mt={2} textAlign="center">
              <StyledForgotLink to="/forgot-password">
                Forgot Password?
              </StyledForgotLink>
            </Box>
          </form>
        </StyledBox>
      </StyledInnerBox>
    </StyledContainer>
  );
};

export default LoginPage;

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

const StyledButton = styled(Button)`
  background-color: #3f51b5;
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 20px;

  &:hover {
    background-color: #bd3e41;
  }
`;

const StyledForgotLink = styled(Link)`
  color: #3f51b5;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;
