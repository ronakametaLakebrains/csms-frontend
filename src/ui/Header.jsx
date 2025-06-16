import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(6)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2.5)};
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledDiv>
        <UserAvatar />
        <HeaderMenu />
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
