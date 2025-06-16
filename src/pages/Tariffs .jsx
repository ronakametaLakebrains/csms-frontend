import React from "react";
import TariffTable from "../features/tariff/TariffTable";
import { styled } from "@mui/system";
import CustomHeading from "../ui/CustomHeading";
import AutocompleteHint from "../ui/AutocompleteHint";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";

 const Tarrifs = () => {

     const options = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
  ];

  return(

    <>
<HeaderContainer>
        <CustomHeading>Tariffs</CustomHeading>
        <RightContainer>
          <AutocompleteHint label="Tariff " options={options} />
          <CustomButton variant="contained" color="primary">
            Search
          </CustomButton>
           <Link to="/AddTariff">
            <CustomButton variant="outlined" color="primary">
              Add Tariff
            </CustomButton>
          </Link>
        </RightContainer>
      </HeaderContainer>
      <TariffTable />
    </>
  )


 };


export default Tarrifs;

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
