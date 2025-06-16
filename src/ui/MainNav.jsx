import styled from "styled-components";
import { NavLink } from "react-router-dom";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { useAuth } from "../context/AuthContext";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: ${({ isOpen }) => (isOpen ? "1.2rem" : "0")};
    justify-content: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};
    color: white;
    font-size: 1.7rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s ease;
    text-decoration: none;
    border-radius: var(--border-radius-sm);
  }

  &:hover,
  &.active {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: white;
    transition: all 0.3s;
  }

  &:hover svg,
  &.active svg {
    color: #486966;
  }

  & span {
    display: ${({ isOpen }) => (isOpen ? "inline" : "none")};
    white-space: nowrap;
  }
`;

function MainNav({ isOpen }) {
  const { role } = useAuth();

  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to="/analytics" isOpen={isOpen} title="Analytics">
            <AddchartOutlinedIcon />
            <span>Analytics</span>
          </StyledNavLink>
        </li>
        {role === "admin" && (
          <li>
            <StyledNavLink to="/partners" isOpen={isOpen} title="Chargers">
              <HandshakeOutlinedIcon />
              <span>Partners</span>
            </StyledNavLink>
          </li>
        )}
        <li>
          <StyledNavLink to="/stations" isOpen={isOpen} title="Stations">
            <LocationOnOutlinedIcon />
            <span>Stations</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/chargers" isOpen={isOpen} title="Chargers">
            <EvStationOutlinedIcon />
            <span>Chargers</span>
          </StyledNavLink>
        </li>

        {/* <li>
          <StyledNavLink to="/drivers" isOpen={isOpen} title="Drivers">
            <PeopleAltOutlinedIcon />
            <span>Drivers</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink
            to="/transactions"
            isOpen={isOpen}
            title="Transactions"
          >
            <ListAltOutlinedIcon />
            <span>Transactions</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/tariffs" isOpen={isOpen} title="Tariffs">
            <CurrencyExchangeOutlinedIcon />
            <span>Tariffs</span>
          </StyledNavLink>
        </li>
          <li>
          <StyledNavLink to="/ocppoperations" isOpen={isOpen} title="OcppOperations">
            <CurrencyExchangeOutlinedIcon />
            <span>OCPP</span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default MainNav;
