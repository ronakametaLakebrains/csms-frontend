 import { Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../ui/CustomButton";
import { Box, styled } from "@mui/system";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomStack from "../../ui/CustomStack";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../ui/Input"
import { useQuery } from "@tanstack/react-query";
import { fetchDriverById } from "../../services/apiDrivers";

const StyledDetailBox = styled(Box)`
background-color: #fff;
padding: 16px;
border: 1px solid #ddd;
border-radius: 8px;
`;

const DriverDetails = ({id, onSave}) => {

  const {isLoading, data: driver, error} = useQuery({
    queryKey : ["driver"],
    queryFn: () => fetchDriverById(id)
  })

  console.log(driver, "current driver")


  // const initialDriverDetails = {
  //   RFID: "CH001",
  //   Name: "John Doe",
  //   MobileNumber: "639992586",
  //   Email: "JohnDoe@gmail.com",
  //   Status: "Not Blocked",
  // };
  
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false)
  const [RFIDValue, setRFIDValue] = useState(RFID)


  
  const handleEdit = () =>{
  setIsEditing(!isEditing)
  }
 
  const label = { inputProps: { "aria-label": "Switch demo" } };


  return (
    <>
    <CustomStack>
      <CustomButton
        variant="outlined"
        color="primary"
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspaceIcon /> Back
      </CustomButton>
      </CustomStack>
      <StyledDetailBox
        sx={{
          marginTop: "4vh",
        }}
      >
        <Typography
          sx={{ fontSize: "1.6rem", fontWeight: "bold", marginTop: "4vh" }}
          variant="h1"
        >
          Driver Details
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold", marginRight:".8vw" }}
            variant="h2"
          >
            RFID:
          </Typography>
            <Input type="text"
             id="RFID"
             onChange={(e) => {setRFIDValue(e.target.value)}}
             value={RFIDValue}
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              variant="h2"
            disabled={!isEditing}
           />
             
           

            <CustomButton onClick={()=>handleEdit()}
              variantType={"contained"}
              children={isEditing ? "Save" : "Edit"}
              sx={{ marginLeft: "20px" }}
            />
          </div>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            variant="h2"
          >
            Name: {initialDriverDetails.Name}
          </Typography>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            variant="h2"
          >
            Mobile Number: {initialDriverDetails.MobileNumber}
          </Typography>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            variant="h2"
          >
            Email: {initialDriverDetails.Email}
          </Typography>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            variant="h2"
          >
            Status: {initialDriverDetails.Status}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              variant="h2"
            >
              Blocked :{" "}
            </Typography>
            <Switch {...label} />
          </div>
        </div>
      </StyledDetailBox>
    </>
  );
};



export default DriverDetails;
