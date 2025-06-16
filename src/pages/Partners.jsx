import React from "react";
import PartnersTable from "../features/Partners/PartnersTable";
import { styled } from "@mui/system";
import CustomHeading from "../ui/CustomHeading";
import AutocompleteHint from "../ui/AutocompleteHint";
import CustomButton from "../ui/CustomButton";
import { Link } from "react-router-dom";
import RoundButton from "../ui/RoundButton";
import AddIcon from "@mui/icons-material/Add";
 const Partners = () => {

  const handleOpen = () => setIsAddDriverModalOpen(true);
  const handleClose = () => setIsAddDriverModalOpen(false);
     const options = [
    { label: "John Manson" },
    { label: "Matt Dickerson" },
    { label: "Brad Mason" },
  ];

  return(

    <>
<HeaderContainer>
        <CustomHeading>Partners</CustomHeading>
        <RightContainer>
          <AutocompleteHint label="Partners " options={options} />
          <CustomButton variant="contained" color="primary">
            Search
          </CustomButton>
           <Link to="/AddPartner">
           <RoundButton onClick={handleOpen}>
                      <AddIcon />
                    </RoundButton>
          </Link>
        </RightContainer>
      </HeaderContainer>
      <PartnersTable />
    </>
  )


 };


export default Partners;

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
