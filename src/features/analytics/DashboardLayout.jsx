// import styled from "styled-components";
// import { useRecentBooking } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { styled } from "@mui/material/styles";
import Map from "./Map";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats owners={90} drivers={178} totalRevenue={25000} energy={354} />
      <Map />
      <div>Pie Chart</div>
      <div>Graph</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

