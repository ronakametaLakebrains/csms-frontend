import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [otpInputs, setOtpInputs] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);

  const CORRECT_OTP = "555555";

  const handleOtpChange = (index, value) => {
    const newOtp = [...otpInputs];
    newOtp[index] = value.slice(-1);
    setOtpInputs(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    const enteredOtp = newOtp.join("");
    setIsOtpValid(enteredOtp === CORRECT_OTP);
  };

  const handlePasswordFocus = () => {
    setShowGuidelines(true);
  };

  const handlePasswordBlur = () => {
    if (password === "") {
      setShowGuidelines(false);
    }
  };

  const validatePassword = (pwd) => ({
    hasLowerCase: /[a-z]/.test(pwd),
    hasUpperCase: /[A-Z]/.test(pwd),
    hasNumber: /[0-9]/.test(pwd),
    minLength: pwd.length >= 8,
  });

  const passwordRules = validatePassword(password);
  const allValid = Object.values(passwordRules).every(Boolean);

  const handleReset = () => {
    if (isOtpValid && allValid) {
      console.log("Password reset with:", password);
      navigate("/login");
    }
  };

  return (
    <StyledContainer maxWidth="sm">
     <Box display="flex" flexDirection="column" alignItems="center" width="100%">
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
        <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
          Reset Password
        </Typography>

        <Typography sx={{ fontSize: "14px", color: "#6e6e6e", mb: 2 }}>
          Enter the 6-digit OTP sent to your email.
        </Typography>

        <OtpInputWrapper>
          {otpInputs.map((digit, index) => (
            <OtpBox
              key={index}
              inputRef={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              type="text"
              maxLength={1}
            />
          ))}
        </OtpInputWrapper>
{isOtpValid && otpInputs.join("").length === 6 && (
          <Typography color="success.main" sx={{ fontSize: "14px", mt: 1 }}>
            ✓ Code verified
          </Typography>
        )}

        <StyledTextField
          label="New Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          sx={{ mt: 2 }}
          InputProps={{
            startAdornment: <span style={{ marginRight: 8 }}>🔑</span>,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {showGuidelines && (
          <Box sx={{ mt: 2, textAlign: "left" }}>
            {!passwordRules.hasLowerCase && (
              <RuleText>✓ At least one lowercase letter</RuleText>
            )}
            {!passwordRules.minLength && (
              <RuleText>✓ Minimum 8 characters</RuleText>
            )}
            {!passwordRules.hasUpperCase && (
              <RuleText>✓ At least one uppercase letter</RuleText>
            )}
            {!passwordRules.hasNumber && (
              <RuleText>✓ At least one number</RuleText>
            )}
          </Box>
        )}

         <ButtonRow>
          <CancelButton onClick={() => navigate(-1)} variant="contained" >Cancel</CancelButton>
          <SubmitButton onClick={handleReset} disabled={!isOtpValid || !allValid} variant="contained" >
            Submit
          </SubmitButton>
          </ButtonRow>
       
      </StyledBox>
      </Box>
    </StyledContainer>
  );
};

export default ResetPasswordPage;
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  text-align: center;
`;

const StyledInnerBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
  & .MuiInputLabel-root {
    font-weight: 500;
  }
`;

const RuleText = styled(Typography)`
  color: #e23744;
  font-size: 14px;
`;

const OtpInputWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
`;

const OtpBox = styled(TextField)`
  width: 44px;
  height: 44px;

  input {
    text-align: center;
    font-size: 18px;
    padding: 8px;
  }
`;

const ButtonRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 10px;
`;


const SubmitButton = styled(Button)`
  background-color: #bd2a2e;
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  width: 100px;
  margin-top: 20px;

  &:hover {
    background-color: #bd3e41;
  }
`;

const CancelButton = styled(Button)`
  background-color: rgb(255, 255, 255);
  color: black;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  width: 100px;
  margin-top: 20px;

  &:hover {
    background-color: rgb(255, 255, 255);
  }
`;
