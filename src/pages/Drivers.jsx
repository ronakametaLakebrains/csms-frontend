import { Stack } from "@mui/material";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';

import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";
import CustomTable from "../ui/CustomTable";
import CustomHeading from "../ui/CustomHeading";
import DriverTable from "../features/Drivers/DriverTable";
import RoundButton from "../ui/RoundButton";
import { useState } from "react";
import CustomModal from "../ui/CustomModal";
import DriverForm from "../features/Drivers/DriverForm";
import { Link, Outlet } from "react-router-dom";
function Drivers() {
  const [isAddDriverModalOpen, setIsAddDriverModalOpen] = useState(false);
  const handleOpen = () => setIsAddDriverModalOpen(true);
  const handleClose = () => setIsAddDriverModalOpen(false);
  return (
    <>
      <HeaderContainer>
        <CustomHeading>Drivers</CustomHeading>
        <RightContainer>
          <CustomInput label="Search Driver" />
          <CustomButton
           variant="contained"
            
          >
            Search
          </CustomButton>
          <CustomButton variant="outlined"><Link to="/driverGroups"> Driver Groups </Link></CustomButton>
          <RoundButton onClick={handleOpen}>
            <AddIcon />
          </RoundButton>
        </RightContainer>
      </HeaderContainer>

      <DriverTable isAddDriverModalOpen={isAddDriverModalOpen} setIsAddDriverModalOpen={setIsAddDriverModalOpen}
       handleClose={handleClose} />
       <CustomModal
        open={isAddDriverModalOpen}
        onClose={handleClose}
        title="Add new Driver"
        content={<DriverForm />}
        actions={[
          {
            label: "Cancel",
            color: "primary",
            variant: "outlined",
            onClick: handleClose,
          },
          {
            label: "Save",
            color: "primary",
            variant: "contained",
            onClick: () => {
              handleClose();
            },
          },
        ]}
      />
    </>
  );
}

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  /* background-color: aqua; */
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Space between FilterComponent and Button */
`;

export default Drivers;
