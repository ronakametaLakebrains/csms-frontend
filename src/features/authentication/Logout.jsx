import React from "react";
import styled from "styled-components";
import ButtonIcon from "../../ui/ButtonIcon";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SpinnerMini from "../../ui/SpinnerMini";
import { useAuth } from "../../context/AuthContext"; // adjust path if needed

const StyledButton = styled(ButtonIcon)`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* spacing between icon and text */
  cursor: pointer;
  padding: 4px 8px;
  font-weight: 500;
  font-size: 1.4rem;
  color: white;
  border-radius: 2px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    color: black;
    background-color: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

function Logout() {
  const { logout, isLoading } = useAuth();

  return (
    <StyledButton onClick={logout} disabled={isLoading}>
      {isLoading ? <SpinnerMini /> : <LogoutOutlinedIcon />}
      <span>Logout</span>
    </StyledButton>
  );
}

export default Logout;
