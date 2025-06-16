import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const HeaderWrapper = styled.header`
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ isSidebarOpen }) =>
    isSidebarOpen ? "240px" : "64px"} 1fr;
  transition: grid-template-columns 0.3s ease-in-out;
  height: calc(100vh - 64px); // Assuming your header is 64px tall
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(3)};
  overflow-y: auto;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <StyledAppLayout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentWrapper isSidebarOpen={isSidebarOpen}>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </ContentWrapper>
    </StyledAppLayout>
  );
}

export default AppLayout;
