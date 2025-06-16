import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomTable, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "../../ui/CustomTable";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Button } from "@mui/material";
import { useRef } from "react";
// Styled Components
const DropdownWrapper = styled.div`
  position: absolute;
  top: 65%;
  
  transform: translateX(-100%); /* push left of icon */

  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  z-index: 1000;
  width: 10rem;
  font-size: 1.2rem;
  background-color :rgb(235, 240, 249)
`;


const DropdownItem = styled.div`
  padding: 0.75rem 0.75rem;
  font-size: 1rem; // <-- increased font size
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const StyledDropdownButton = styled(Button)`
  padding: 0.75rem !important;
  width: 100%;
  justify-content: flex-start;
  text-transform: none;
  font-size: 1rem !important; // <-- increased font size
  &:hover {
    background-color: #f3f4f6 !important;
  }
`;

function TransactionsTable() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  const dummyData = [
    {
      transactionId: "TXN100001",
      dateTime: "2025-04-08 10:15",
      driverName: "Arjun Reddy",
      stationName: "GreenCharge Hub",
      chargerId: "CHG101",
      unitConsumed: 22.5,
      totalPayment: 295.0,
      invoice: "INV100001",
    },
    {
      transactionId: "TXN100002",
      dateTime: "2025-04-08 11:30",
      driverName: "Sneha Kapoor",
      stationName: "VoltPoint Station",
      chargerId: "CHG102",
      unitConsumed: 18.7,
      totalPayment: 245.75,
      invoice: "INV100002",
    },
    {
      transactionId: "TXN100003",
      dateTime: "2025-04-08 13:00",
      driverName: "Ravi Sharma",
      stationName: "EcoCharge Zone",
      chargerId: "CHG103",
      unitConsumed: 27.0,
      totalPayment: 310.5,
      invoice: "INV100003",
    },
    {
      transactionId: "TXN100004",
      dateTime: "2025-04-08 14:45",
      driverName: "Divya Mehta",
      stationName: "PowerUp Point",
      chargerId: "CHG104",
      unitConsumed: 20.3,
      totalPayment: 265.25,
      invoice: "INV100004",
    },
    {
      transactionId: "TXN100005",
      dateTime: "2025-04-08 16:10",
      driverName: "Karan Malhotra",
      stationName: "ChargeWay Station",
      chargerId: "CHG105",
      unitConsumed: 33.5,
      totalPayment: 398.0,
      invoice: "INV100005",
    },
    {
      transactionId: "TXN100006",
      dateTime: "2025-04-08 17:30",
      driverName: "Ayesha Khan",
      stationName: "Spark EV Stop",
      chargerId: "CHG106",
      unitConsumed: 15.9,
      totalPayment: 198.75,
      invoice: "INV100006",
    },
    {
      transactionId: "TXN100007",
      dateTime: "2025-04-08 19:00",
      driverName: "Manish Verma",
      stationName: "GreenCharge Hub",
      chargerId: "CHG107",
      unitConsumed: 26.8,
      totalPayment: 320.0,
      invoice: "INV100007",
    },
    {
      transactionId: "TXN100008",
      dateTime: "2025-04-08 20:25",
      driverName: "Neha Sinha",
      stationName: "VoltPoint Station",
      chargerId: "CHG108",
      unitConsumed: 19.4,
      totalPayment: 248.2,
      invoice: "INV100008",
    },
    {
      transactionId: "TXN100009",
      dateTime: "2025-04-08 21:40",
      driverName: "Rahul Yadav",
      stationName: "EcoCharge Zone",
      chargerId: "CHG109",
      unitConsumed: 24.1,
      totalPayment: 289.3,
      invoice: "INV100009",
    },
    {
      transactionId: "TXN100010",
      dateTime: "2025-04-08 23:00",
      driverName: "Priya Menon",
      stationName: "PowerUp Point",
      chargerId: "CHG110",
      unitConsumed: 29.0,
      totalPayment: 360.0,
      invoice: "INV100010",
    },
  ];

  return (
    <>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Transactions ID</TableCell>
            <TableCell>Date & Time</TableCell>
            <TableCell>Driver Name</TableCell>
            <TableCell>Station Name</TableCell>
            <TableCell>Charger ID</TableCell>
            <TableCell>Unit Consumed</TableCell>
            <TableCell>Total Payment</TableCell>
            <TableCell>Invoice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <TableRow key={row.transactionId} style={{ position: "relative" }}>
              <TableCell>{row.transactionId}</TableCell>
              <TableCell>{row.dateTime}</TableCell>
              <TableCell>{row.driverName}</TableCell>
              <TableCell>{row.stationName}</TableCell>
              <TableCell>{row.chargerId}</TableCell>
              <TableCell>{row.unitConsumed}</TableCell>
              <TableCell>{row.totalPayment}</TableCell>
              <TableCell>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <div
                    style={{ textDecoration: "none", cursor: "pointer" }}
                    onClick={() => toggleMenu(row.transactionId)}
                  >
                    <MoreVertOutlinedIcon />
                  </div>

                  {openMenuId === row.transactionId && (
                    <DropdownWrapper>
                      <DropdownItem onClick={() => {}}>
                        Driver Invoice 
                      </DropdownItem>
                      <DropdownItem onClick={() => {}}>Partner Invoice</DropdownItem>
                      <DropdownItem onClick={() => {}}>SuperAdmin Invoice</DropdownItem>
                    </DropdownWrapper>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
      <TableFooter>{/* <Pagination /> */}</TableFooter>
    </>
  );
}

export default TransactionsTable;
