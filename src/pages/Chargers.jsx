import React from "react";
import { Link } from "react-router-dom";
import AutocompleteHint from "../ui/AutocompleteHint";
import CustomButton from "../ui/CustomButton";
import ChargerTable from "../features/chargers/ChargerTable";
import { styled } from "@mui/system";
import CustomHeading from "../ui/CustomHeading";

const Chargers = () => {
  const options = [
    { label: "Owner 1" },
    { label: "Owner 2" },
    { label: "Owner 3" },
  ];

  return (
    <>
      <HeaderContainer>
        <CustomHeading>All Chargers</CustomHeading>
        <RightContainer>
          <AutocompleteHint label="OwnerID" options={options} />
          <CustomButton variant="contained" color="primary">
            Search
          </CustomButton>
          <Link to="/addCharger">
            <CustomButton variant="outlined" color="primary">
              Add New Charger
            </CustomButton>
          </Link>
        </RightContainer>
      </HeaderContainer>
      <ChargerTable />
    </>
  );
};

// Styled Components
const HeaderContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const RightContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 16px; /* Space between FilterComponent and Button */
`;

export default Chargers;
