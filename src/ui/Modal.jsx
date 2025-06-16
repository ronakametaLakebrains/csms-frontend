import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensures modal appears above all elements */
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  min-width: 440px;
  border-radius: 8px;
  position: relative;
  z-index: 1001; /* Higher than overlay */
  border-radius: 30px;
`;

// Header container to align title and close button
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  font-weight: bold;
  color: red;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  // margin-top: 15px;
`;

const DynamicModal = ({ isOpen, onClose, title, children, onSave }) => {
  if (!isOpen) return null; // Ensure modal only renders when open

  return (
    <Overlay>
      <ModalContainer>
        {/* Modal Header with Title and Close Button */}
        <ModalHeader>
          <h3>{title}</h3>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        {/* Modal Content (Injected via children) */}
        {children}

        {/* Buttons (Cancel and Save) */}
        <ButtonContainer>
          <CustomButton variant="outlined" onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton color="secondary" onClick={onSave}>
            Save
          </CustomButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default DynamicModal;
