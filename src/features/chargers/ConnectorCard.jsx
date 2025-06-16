import { Card, Box, Typography, IconButton } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import EvStationIcon from "@mui/icons-material/EvStation";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

// Define colors for different statuses
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "active":
      return "green";
    case "available":
      return "blue";
    case "faulty":
      return "red";
    default:
      return "gray";
  }
};

const ConnectorCard = ({ connector }) => {
  console.log(connector);
  return (
    <Card
      sx={{
        p: 3,
        boxShadow: 3,
        borderRadius: "12px",
        width: "24rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        backgroundColor: "#fff",
      }}
    >
      {/* Top Row: Connector Name & Power Consumption */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h6" fontWeight="bold">
          {connector.connector_id}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <BoltIcon sx={{ color: "blue", fontSize: 20 }} />
          <Typography variant="body1">{connector.totalConsumption}</Typography>
        </Box>
      </Box>

      {/* Middle Row: Status & Connector Type */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ color: getStatusColor(connector.status) }}
        >
          {connector.status}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <EvStationIcon sx={{ color: "gray", fontSize: 20 }} />
          <Typography variant="body1">{connector.current_type}</Typography>
        </Box>
      </Box>

      {/* Toggle Button */}
      {/* <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <IconButton>
          <ToggleOnIcon
            sx={{ fontSize: 28, color: getStatusColor(connector.status) }}
          />
        </IconButton>
      </Box> */}
    </Card>
  );
};

export default ConnectorCard;
