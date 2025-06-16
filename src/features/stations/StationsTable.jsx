import React from "react";
import CustomTable, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "../../ui/CustomTable";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useQuery } from "@tanstack/react-query";
import { getStations } from "../../services/apiStations";
import Spinner from "../../ui/Spinner";

const StationsTable = () => {
  const {
    isLoading,
    data: stations,
    error,
  } = useQuery({
    queryKey: ["stations"],
    queryFn: getStations,
  });

  console.log(stations, "333");

  const dummyStations = [
    {
      stationId: "ST001",
      stationName: "GreenCharge Hub",
      numberOfChargers: 6,
      powerConsumption: "1200 kWh",
      status: "Active",
      location: "Bangalore, KA",
      revenue: "₹85,000",
    },
    {
      stationId: "ST002",
      stationName: "VoltZone",
      numberOfChargers: 4,
      powerConsumption: "900 kWh",
      status: "Maintenance",
      location: "Mumbai, MH",
      revenue: "₹62,500",
    },
    {
      stationId: "ST003",
      stationName: "EcoPower Station",
      numberOfChargers: 8,
      powerConsumption: "1500 kWh",
      status: "Active",
      location: "Delhi, DL",
      revenue: "₹1,10,000",
    },
    {
      stationId: "ST004",
      stationName: "ZapGo",
      numberOfChargers: 3,
      powerConsumption: "700 kWh",
      status: "Inactive",
      location: "Chennai, TN",
      revenue: "₹40,000",
    },
    {
      stationId: "ST005",
      stationName: "ChargeXpress",
      numberOfChargers: 5,
      powerConsumption: "1050 kWh",
      status: "Active",
      location: "Hyderabad, TS",
      revenue: "₹78,300",
    },
    {
      stationId: "ST006",
      stationName: "PowerGrid Station",
      numberOfChargers: 7,
      powerConsumption: "1300 kWh",
      status: "Active",
      location: "Pune, MH",
      revenue: "₹92,000",
    },
    {
      stationId: "ST007",
      stationName: "FastCharge Point",
      numberOfChargers: 6,
      powerConsumption: "1100 kWh",
      status: "Maintenance",
      location: "Kolkata, WB",
      revenue: "₹75,000",
    },
    {
      stationId: "ST008",
      stationName: "QuickZap Hub",
      numberOfChargers: 4,
      powerConsumption: "800 kWh",
      status: "Inactive",
      location: "Ahmedabad, GJ",
      revenue: "₹50,000",
    },
    {
      stationId: "ST009",
      stationName: "EcoCharge Center",
      numberOfChargers: 10,
      powerConsumption: "1800 kWh",
      status: "Active",
      location: "Lucknow, UP",
      revenue: "₹1,25,000",
    },
    {
      stationId: "ST010",
      stationName: "UrbanCharge Station",
      numberOfChargers: 5,
      powerConsumption: "1000 kWh",
      status: "Active",
      location: "Jaipur, RJ",
      revenue: "₹80,000",
    },
  ];

  if (isLoading) return <Spinner />;

  return (
    <>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Station ID</TableCell>
            <TableCell>Station Name</TableCell>
            <TableCell>No. of Charger</TableCell>
            <TableCell>Power Consumption</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stations.map((station) => (
            <TableRow key={station.station_id}>
              <TableCell>
                <Link to={`${station.station_id}`}>{station.station_id}</Link>
              </TableCell>
              <TableCell>{station.station_name}</TableCell>
              <TableCell>{2}</TableCell>
              <TableCell>{100}</TableCell>
              <TableCell>{station.status}</TableCell>
              <TableCell>{station.latitude}</TableCell>
              <TableCell>{10}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
      <TableFooter>{/* <Pagination count={count} /> */}</TableFooter>
    </>
    // </StyledTableContainer>
  );
};

const HorizontalStatus = styled("div")`
  display: flex;
  align-items: center;
  gap: 16px; /* Adjust spacing between items */
`;

const StatusItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 4px; /* Space between icon and text */
  font-size: 14px;
  color: #555; /* Text color */
`;

const StyledDiv = styled("div")`
  align-items: center;
  padding-top: 10px;
  /* background-color: aquamarine; */
`;

export default StationsTable;
