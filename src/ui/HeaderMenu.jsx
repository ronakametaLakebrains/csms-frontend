// import { HiOutlineUser } from "react-icons/hi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";

import ButtonIcon from "./ButtonIcon";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4 rem;
  color: white;

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #486966;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: white;
    transition: all 0.3s;
  }
`;

function HeaderMenu() {
  // const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      {/* <li>
        <ButtonIcon
          onClick={() => {
            navigate("/account");
          }}
        >
          <HiOutlineUser />
        </ButtonIcon>
      </li> */}

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
