import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  TextField,
  Grid,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { Grid2 } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import EvStationIcon from "@mui/icons-material/EvStation";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { display, height, styled, textAlign } from "@mui/system";
import CustomModal from "../../ui/CustomModal";
import CustomButton from "../../ui/CustomButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCharger, fetchChargers } from "../../services/apiChargers";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import CustomStack from "../../ui/CustomStack";
import AddConnectorForm from "../connectors/AddConnectorForm";
import CustomInput from "../../ui/CustomInput";
import ConnectorCard from "./ConnectorCard";
import { fetchConnector } from "../../services/apiConnector";
import InfoCard from "../../ui/InfoCard";
import ConnectorsPieChart from "../analytics/ConnectorsPieChart";
import RevenueChargersLineChart from "../analytics/RevenueChargersLineChart";

const ChargerDetails = () => {
  const chargerid = useParams();
  const { id } = chargerid;
  const navigate = useNavigate();

  const {
    isLoading,
    data: charger,
    error,
  } = useQuery({
    queryKey: ["charger"],
    queryFn: () => fetchCharger(id),
    staleTime:0  });

  const { data: connector, error: connectorError } = useQuery({
    queryKey: ["connector"],
    queryFn: () => fetchConnector(id),
  });

  console.log(connector);

  // const [chargerDetails, setChargerDetails] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddConnectorModalOpen, setIsAddConnectorModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpen = () => setIsAddConnectorModalOpen(true);
  const handleClose = () => setIsAddConnectorModalOpen(false);

  const handleRecentSession = () => {
    navigate("/sessions");
  };

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <StyledPageContainer>
      <CustomStack direction="row" spacing={101}>
        {/* <CustomButton
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => navigate(-1)}
        >
          <KeyboardBackspaceIcon /> Back
        </CustomButton> */}
        <Typography variant="h4" spacing="100" fontWeight="bold">
          Charger Information
        </Typography>
        <CustomStack direction="row">
          <CustomButton
            onClick={handleRecentSession}
            variant="outlined"
            color="primary  "
          >
            Charger Logs
          </CustomButton>
          <CustomButton
            onClick={handleRecentSession}
            variant="contained"
            color="primary"
          >
            Recent Sessions
          </CustomButton>
        </CustomStack>
      </CustomStack>

      {/* Charger Details Section */}
      <Box mb={4} mt={2}>
        <CustomStack direction="row">
          <InfoCard label={"Charger ID"} value={charger.charger_id} />
          <InfoCard label={"Station"} value={charger.charging_station_id} />
          <InfoCard
            label={"Last heartbeat"}
            value={charger.last_heartbeat}
            icon={<FavoriteBorderIcon />}
          />
          <InfoCard label={"Status"} value={"Offilne (Disconnected)"} />
          <InfoCard label={"Status"} value={charger.status} />
        </CustomStack>
      </Box>

      {/* Buttons for Charger Actions */}
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight="bold">
          Connector Information
        </Typography>
        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => {
            setIsAddConnectorModalOpen(true);
          }}
        >
          Add Connector
        </CustomButton>
      </Box>

      {/* Connectors Table */}
      <Grid2 container spacing={2} sx={{ mt: 1 }}>
        {connector?.map((connector, index) => (
          <Grid2 key={index} item xs={12} sm={6} md={3}>
            <ConnectorCard connector={connector} />
          </Grid2>
        ))}
      </Grid2>

      {/* statictics  */}
      <Box mb={2} mt={3}>
        {/* <Typography variant="h5" fontWeight="bold">
          Statistics
        </Typography> */}
        <ChartWrapper>
          <Typography variant="h5" fontWeight="bold">
            Connectors Status Summary
          </Typography>
          <ConnectorsPieChart />
        </ChartWrapper>
      </Box>

      <CustomModal
        open={isAddConnectorModalOpen}
        onClose={handleClose}
        title="Add new Connector"
        content={<AddConnectorForm charger_id={id} />}
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
      <CustomModal
        open={isEditModalOpen}
        onClose={handleClose}
        title="Edit Connector"
        content={<AddConnectorForm />}
        actions={[
          {
            label: "Cancel",
            color: "secondary",
            variant: "outlined",
            onClick: () => setIsEditModalOpen(false),
          },
          {
            label: "Save",
            color: "secondary",
            variant: "contained",
            onClick: () => setIsEditModalOpen(false),
          },
          {
            label: "Delete",
            color: "primary",
            variant: "contained",
            onClick: () => setIsEditModalOpen(false),
          },
        ]}
      />
    </StyledPageContainer>
  );
};

// Styled Components

const ChartWrapper = styled("div")(({ theme }) => ({
  // height: "calc(50% - 8px)", // Each chart takes half the right container height minus half the gap
  height: "250px",
  width: "400px",
  padding: "16px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    height: "auto", // Allow charts to adjust height when stacked
  },
}));

const StyledPageContainer = styled(Box)`
  padding: 1px;
  background-color: #f9f9f9;
`;

const StyledDetailBox = styled(Box)`
  background-color: #fff;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const StyledTableCell = styled(TableCell)`
  color: #333;
  font-size: 14px;
`;

export default ChargerDetails;
