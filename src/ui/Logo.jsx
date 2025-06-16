import styled from "styled-components";
import LogoImage from "../assets/logo/pine-chargeweb-white.png";
import { Typography } from "@mui/material";

const StyledLogo = styled.div`
  text-align: center;
  /* margin-bottom: 20px; */
`;

const Img = styled.img`
  height: 3.5rem;
  width: auto;
  /* height: 35px; */
`;

function Logo() {
  return (
    <StyledLogo>
      {/* <Img src={LogoImage} alt="Logo" /> */}
      <Typography variant="h2">LakeBrains</Typography>
    </StyledLogo>
  );
}

export default Logo;
