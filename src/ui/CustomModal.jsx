import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "./CustomButton";

const ModalWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: 24,
  padding: theme.spacing(3),
}));

const ModalHeader = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const ModalFooter = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;

const CustomModal = ({ open, onClose, title, content, actions }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalWrapper>
        <ModalHeader>
          <Typography
            variant="h6"
            component="h2"
            sx={{ mb: 2, fontSize: "large" }}
          >
            {title}
          </Typography>
        </ModalHeader>

        <Typography variant="body1" sx={{ mb: 2 }}>
          {content}
        </Typography>

        <ModalFooter>
          {actions?.map((action, index) => (
            <CustomButton
              key={index}
              variant={action.variant || "contained"}
              color={action.color || "primary"}
              onClick={action.onClick}
            >
              {action.label}
            </CustomButton>
          ))}
        </ModalFooter>
      </ModalWrapper>
    </Modal>
  );
};

export default CustomModal;
