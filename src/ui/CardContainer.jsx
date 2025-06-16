import React from "react";
import { styled } from "@mui/material/styles";
import InfoCard from "../ui/InfoCard";
import Stats from "../features/analytics/Stats";

const StyledCardContainer = styled("div")(({ theme }) => ({
  // backgroundColor: "red",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  // width: "100%",
  // gap: theme.spacing(2), // space between child elements
  // margin: theme.spacing(2),
}));

function CardContainer() {
  return (
    <StyledCardContainer>
      <Stats stations={7} chargers={72} drivers={178} totalRevenue={25000} energy={354} />
    </StyledCardContainer>
  );
}

export default CardContainer;
