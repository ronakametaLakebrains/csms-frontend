import React from "react";
import CustomTable, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "../../ui/CustomTable";
import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SwapVertIcon from "@mui/icons-material/SwapVert";

import CustomFilter from "../../ui/CustomFilter";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import Pagination from "../../ui/Pagination";
import { fetchChargers } from "../../services/apiChargers";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const options = [
  { label: "Total Connectors", value: "Total Connectors" },
  { label: "Availabe", value: "Availabe" },
  { label: "Charging", value: "Charging" },
  { label: "Faulty", value: "Faulty" },
];

const options2 = [
  { label: "Sort", value: "Total Connectors" },
  { label: "Faulty", value: "faulty" },
  { label: "Availabe", value: "Availabel" },
  { label: "active", value: "active" },
];

const count = 5;

const ChargerTable = () => {
  const {
    isLoading,
    data: chargers,
    error,
  } = useQuery({
    queryKey: ["chargers"],
    queryFn: fetchChargers,
    // refetchInterval: 2000,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;
  console.log(chargers);

  //adding dummy data

  const dummyChargers = [
    {
      id: "f9b1c2d3-4e5a-6b7c-8d9e-0a1b2c3d4e5f",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-AE47BC12",
      locationDetails: {
        lat: 12.982,
        city: "MetroCity",
        long: 77.6,
        country: "CountryB",
        address_line_1: "Central Plaza",
        address_line_2: "North Avenue",
      },
      chargerType: "AC",
      status: "online",
      tariff: {
        rate: 18.0,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelY",
      },
      totalBilling: "6100.50",
      totalConsumption: "1050.00",
      totalConnectors: "2",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "c8d2e3f4-a5b6-4c7d-8e9f-0a1b2c3d4f5a",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-BF89D312",
      locationDetails: {
        lat: 12.96,
        city: "UrbanVille",
        long: 77.58,
        country: "CountryB",
        address_line_1: "Downtown Hub",
        address_line_2: "South Road",
      },
      chargerType: "DC",
      status: "offline",
      tariff: {
        rate: 17.4,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelX",
      },
      totalBilling: "5850.00",
      totalConsumption: "1000.00",
      totalConnectors: "4",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "e7f6d5c4-b3a2-4198-8f7e-6d5c4b3a2f1e",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-DF54C8BA",
      locationDetails: {
        lat: 13.0001,
        city: "TechPark",
        long: 77.62,
        country: "CountryB",
        address_line_1: "Innovation Center",
        address_line_2: "Innovation Street",
      },
      chargerType: "AC",
      status: "online",
      tariff: {
        rate: 16.5,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelZ",
      },
      totalBilling: "6000.00",
      totalConsumption: "1030.00",
      totalConnectors: "1",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "3f2e1d4c-5b6a-7c8d-9e0f-1a2b3c4d5f6a",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-C3E7F912",
      locationDetails: {
        lat: 12.945,
        city: "GreenTown",
        long: 77.57,
        country: "CountryB",
        address_line_1: "Eco Plaza",
        address_line_2: "Garden Road",
      },
      chargerType: "DC",
      status: "online",
      tariff: {
        rate: 17.0,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelA",
      },
      totalBilling: "5800.25",
      totalConsumption: "1015.45",
      totalConnectors: "3",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "4e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-FA12BC34",
      locationDetails: {
        lat: 12.98,
        city: "SilverCity",
        long: 77.605,
        country: "CountryB",
        address_line_1: "Sunset Boulevard",
        address_line_2: "Maple Street",
      },
      chargerType: "DC",
      status: "offline",
      tariff: {
        rate: 17.8,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelB",
      },
      totalBilling: "5950.75",
      totalConsumption: "1020.50",
      totalConnectors: "2",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "7a8b9c0d-1e2f-3a4b-5c6d-7e8f90123456",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-EC9F1A34",
      locationDetails: {
        lat: 12.99,
        city: "RiverSide",
        long: 77.61,
        country: "CountryB",
        address_line_1: "Harbor Front",
        address_line_2: "Dock Road",
      },
      chargerType: "AC",
      status: "online",
      tariff: {
        rate: 18.2,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelC",
      },
      totalBilling: "6105.50",
      totalConsumption: "1045.30",
      totalConnectors: "3",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "9d8c7b6a-5e4f-3d2c-1b0a-9f8e7d6c5b4a",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-B7D2E8F1",
      locationDetails: {
        lat: 12.955,
        city: "Lakeside",
        long: 77.59,
        country: "CountryB",
        address_line_1: "Waterfront Complex",
        address_line_2: "River Road",
      },
      chargerType: "DC",
      status: "online",
      tariff: {
        rate: 16.8,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelD",
      },
      totalBilling: "5750.00",
      totalConsumption: "1005.75",
      totalConnectors: "4",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "b4a3c2d1-e6f5-4b7a-8c9d-0e1f2a3b4c5d",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-D2C7B4A9",
      locationDetails: {
        lat: 12.965,
        city: "Hilltop",
        long: 77.6005,
        country: "CountryB",
        address_line_1: "Summit Plaza",
        address_line_2: "Pine Street",
      },
      chargerType: "AC",
      status: "offline",
      tariff: {
        rate: 17.2,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelE",
      },
      totalBilling: "5850.00",
      totalConsumption: "1012.80",
      totalConnectors: "2",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
    {
      id: "d1e2f3a4-b5c6-7d8e-9f0a-1b2c3d4e5f6a",
      customerID: "564c2afd-dff9-4e22-b16f-b2caac76f855",
      name: "Charger-FA9C3D7B",
      locationDetails: {
        lat: 13.005,
        city: "Sunrise",
        long: 77.615,
        country: "CountryB",
        address_line_1: "Morning Plaza",
        address_line_2: "East Lane",
      },
      chargerType: "DC",
      status: "online",
      tariff: {
        rate: 17.6,
        unit: "kWh",
        currency: "INR",
      },
      miscDetails: {
        model: "ModelF",
      },
      totalBilling: "6005.25",
      totalConsumption: "1035.90",
      totalConnectors: "3",
      station: {
        id: "564c2afd-dff9-4e22-b16f-b2caac76f855",
        name: "Station-553f9085",
      },
    },
  ];

  return (
    <>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Charger ID</TableCell>
            <TableCell>Station Name</TableCell>
            <TableCell>Total Connectors</TableCell>
            <TableCell>Power Consumption</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chargers.map((charger) => (
            <TableRow key={charger.charger_id}>
              <TableCell>
                <Link to={`${charger.charger_id}`}>{charger.charger_id}</Link>
              </TableCell>
              <TableCell>{charger.charging_station_id}</TableCell>
              <TableCell>{charger.totalConnectors}</TableCell>
              <TableCell>{`${charger.power_consumption} kWh`}</TableCell>
              <TableCell>{charger.status}</TableCell>
              <TableCell>
                <MoreVertOutlinedIcon />
              </TableCell>
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

export default ChargerTable;

// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Stack,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { styled } from "@mui/system";
// import ErrorIcon from "@mui/icons-material/Error";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import PlayCircleIcon from "@mui/icons-material/PlayCircle";

// import CustomFilter from "../../ui/CustomFilter";

// const options = [
//   { label: "Total Connectors", value: "Total Connectors" },
//   { label: "Availabe", value: "Availabe" },
//   { label: "Charging", value: "Charging" },
//   { label: "Faulty", value: "Faulty" },
// ];

// const options2 = [
//   { label: "Sort by Faulty", value: "Total Connectors" },
//   { label: "Sort by Availabe", value: "Availabe" },
// ];

// const ChargerTable = ({ data }) => {
//   return (
//     <StyledTableContainer component={Paper}>
//       <StyledTable>
//         {/* Table Header */}
//         <StyledTableHead>
//           <TableRow>
//             <StyledTableCell>Charger ID</StyledTableCell>
//             <StyledTableCell>Owner Name</StyledTableCell>
//             <StyledTableCell>Location</StyledTableCell>
//             <StyledTableCell>Power Consumption</StyledTableCell>
//             <Stack direction="row" spacing={1}>
//               <CustomFilter options={options} label="" />
//               <CustomFilter options={options2} label="" />
//             </Stack>
//           </TableRow>
//         </StyledTableHead>

//         {/* Table Body */}
//         <StyledTableBody>
//           {data.map((row) => (
//             <TableRow key={row.chargerId}>
//               <StyledTableCell>
//                 <Link to={`${row.chargerId}`}>{row.chargerId}</Link>
//               </StyledTableCell>
//               <StyledTableCell>{row.ownerName}</StyledTableCell>
//               <StyledTableCell>{row.location}</StyledTableCell>
//               <StyledTableCell>{row.powerConsumption}</StyledTableCell>
//               <StyledTableCell>
//                 <HorizontalStatus>
//                   <StatusItem>
//                     <ErrorIcon style={{ color: "red" }} />
//                     <span>{row.status.faulty}</span>
//                   </StatusItem>
//                   <StatusItem>
//                     <CheckCircleIcon style={{ color: "green" }} />
//                     <span>{row.status.available}</span>
//                   </StatusItem>
//                   <StatusItem>
//                     <PlayCircleIcon style={{ color: "blue" }} />
//                     <span>{row.status.active}</span>
//                   </StatusItem>
//                 </HorizontalStatus>
//               </StyledTableCell>
//             </TableRow>
//           ))}
//         </StyledTableBody>
//       </StyledTable>
//     </StyledTableContainer>
//   );
// };

// const StyledTableCell = styled(TableCell)`
//   color: #333;
//   font-size: 14px;
//   text-align: center;
// `;

// const StyledTableContainer = styled(TableContainer)`
//   justify-content: center;
//   align-items: center;
//   /* background-color: aqua;
//    */
// `;

// const StyledTable = styled(Table)`
//   justify-content: center;
//   align-items: center;
//   /* background-color: blue; */
// `;
// const StyledTableBody = styled(TableBody)`
//   justify-content: center;
//   align-items: center;
//   /* background-color: red; */
// `;

// const StyledTableHead = styled(TableHead)`
//   justify-content: center;
//   background-color: #dcdcdcba;
// `;

// export default ChargerTable;
