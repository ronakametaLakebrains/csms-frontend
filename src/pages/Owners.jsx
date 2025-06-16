import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import styled from "styled-components";

import DynamicModal from "../ui/Modal";
import AddNewOwner from "../features/owners/AddNewOwner"; // Import the form
import OwnerTable from "../features/owners/OwnerTable"
import CustomHeading from "../ui/CustomHeading";
const Owners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (data) => {
    console.log("Saving owner data:", data);
    setIsModalOpen(false); // Close modal after saving
  };
  return (
    <>
      <HeaderContainer>
        <CustomHeading>All Owners</CustomHeading>
        <RightContainer>
          <CustomInput label="Search owners" />
          <CustomButton variant="contained">Search</CustomButton>
          <CustomButton
            variant="contained"
            color="secondary"
            onClick={handleOpenModal}
          >
            Add New Owner
          </CustomButton>
        </RightContainer>
      </HeaderContainer>
     {/* Modal with AddNewOwner form inside */}
       <DynamicModal isOpen={isModalOpen} onClose={handleCloseModal} title={"Add New Owner"}>
          <AddNewOwner onSave={handleSave} />
     </DynamicModal>
        <OwnerTable/>
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

export default Owners;
  
  //    (
  //     <div>
  //       {/* Button to open modal */}
  //       <CustomButton variant="contained" color="primary" onClick={handleOpenModal}>
  //         Add New Owner
  //       </CustomButton>
  
  //       {/* Modal with AddNewOwner form inside */}
  //       <DynamicModal isOpen={isModalOpen} onClose={handleCloseModal}>
  //         <AddNewOwner onSave={handleSave} />
  //       </DynamicModal>
  //       <OwnerTable/>
  //     </div>
  //   );
  // };