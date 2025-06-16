import styled from "styled-components";
import StationsTable from "../features/stations/StationsTable";
import CustomTable from "../ui/CustomTable";
import CustomHeading from "../ui/CustomHeading";
import AutocompleteHint from "../ui/AutocompleteHint";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

function Stations() {
    const options = [
        { label: "Station 1" },
        { label: "Station 2" },
        { label: "Station 3" },
      ];
    
  return (
    <>
      <HeaderContainer>
        <CustomHeading>All Stations</CustomHeading>
        <RightContainer>
          <AutocompleteHint label="Search..."  />
          <CustomButton variant="contained" color="primary">
            Search
          </CustomButton>
          <Link to="addStation">
            <CustomButton variant="outlined" color="primary">
              Add New Station
            </CustomButton>
          </Link>
        </RightContainer>
      </HeaderContainer>
      <StationsTable />
    </>
  );
}
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

export default Stations;
