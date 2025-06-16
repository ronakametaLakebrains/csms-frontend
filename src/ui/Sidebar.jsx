import styled from "styled-components";
import MainNav from "./MainNav";
import SidebarButton from "./SidebarButton";

const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(2)};
  border-right: 1px solid ${({ theme }) => theme.palette.grey[200]};
  grid-row: 1 / -1;
  border-radius: 0 8px 8px 0;
  width: ${({ $isOpen }) => ($isOpen ? "250px" : "80px")};
  transition: width 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${({ $isOpen }) => ($isOpen ? "flex-start" : "center")};
`;

const ToggleButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -18px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.grey[800]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[600]};
  }

  & svg {
    color: ${({ theme }) => theme.palette.common.white};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(0deg)" : "rotate(180deg)")};
    transition: transform 0.3s ease;
  }
`;

function Sidebar({ isOpen, setIsOpen }) {
  if (!setIsOpen) {
    console.error("❌ setIsOpen function is missing in Sidebar props!");
  }

  return (
    <StyledSidebar $isOpen={isOpen}>
      <ToggleButtonWrapper $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <SidebarButton isOpen={isOpen} />
      </ToggleButtonWrapper>
      <MainNav isOpen={isOpen} />
    </StyledSidebar>
  );
}

export default Sidebar;
