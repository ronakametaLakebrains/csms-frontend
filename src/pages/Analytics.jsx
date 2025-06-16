import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import CardContainer from "../ui/CardContainer";
import Map from "../features/analytics/Map";
import RevenueChargersLineChart from "../features/analytics/RevenueChargersLineChart";
import ConnectorsPieChart from "../features/analytics/ConnectorsPieChart";

function Analytics() {
  return (
    <>
      {/* Uncomment the heading if needed */}
      {/* <CustomHeading>Analytics Dashboard</CustomHeading> */}
      <CardContainer />

      {/* Map and Chart Section */}
      <Container>
        <LeftContainer>
          <Map />
        </LeftContainer>
        <RightContainer>
          <ChartWrapper>
            <Typography variant="h5" fontWeight="bold">
              Chargers and Revenue from Jan 27 2025 — Mar 05 2025
            </Typography>
            <RevenueChargersLineChart />
          </ChartWrapper>
          <ChartWrapper>
            <Typography variant="h5" fontWeight="bold">
              Connectors Status Summary
            </Typography>
            <ConnectorsPieChart />
          </ChartWrapper>
        </RightContainer>
      </Container>
    </>
  );
}

export default Analytics;

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  // padding: "16px",
  marginTop: "15px",
  height: "55rem", // Default height for larger screens
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    height: "auto", // Let the height adjust for smaller screens
  },
}));

const LeftContainer = styled("div")(({ theme }) => ({
  flex: 1,
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: "auto",
  },
}));

const RightContainer = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

const ChartWrapper = styled("div")(({ theme }) => ({
  height: "calc(50% - 8px)", // Each chart takes half the right container height minus half the gap
  padding: "16px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    height: "auto", // Allow charts to adjust height when stacked
  },
}));
