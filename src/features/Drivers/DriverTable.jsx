import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import CustomTable, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
} from "../../ui/CustomTable";
import { fetchDrivers } from "../../services/apiDrivers";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import Error from "../../ui/Error";
import CustomModal from "../../ui/Modal"; // Import the modal
import DriverForm from "./DriverForm";
function DriverTable({isAddDriverModalOpen, setIsAddDriverModalOpen, handleClose}) {
  // const {
  //   isLoading,
  //   data: drivers,
  //   error,
  // } = useQuery({
  //   queryKey: ["drivers"],
  //   queryFn: fetchDrivers,
  // });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  // Open Modal and Set Selected Driver Data
  const handleOpenModal = (driver) => {
    setSelectedDriver(driver);
    setIsModalOpen(true);
  };

  // Save Handler (Form Submission)
  const handleSave = (data) => {
    console.log("Saved Data:", data);
    setIsModalOpen(false);
  };

  // if (isLoading) return <Spinner />;
  // if (error) return <Error error={error} />;

  //dummy drivers

  const dummyDrivers = [
    {
      id: "a9c5ef20-0d2f-4e13-8df6-1b3cd2e9f8a2",
      RFID: "RFID-A3F5B7C9",
      mobile: "9876543210",
      name: "Driver-8B7C9D12",
      email: "driver.alpha@example.com",
      totalBilling: "2034.50",
      totalConsumption: "400.00",
    },
    {
      id: "f4e2c5d6-a8b9-421c-b1d2-ff90e9a8b7c6",
      RFID: "RFID-45B2D8F3",
      mobile: "1122334455",
      name: "Driver-4F9E2A3B",
      email: "driver.beta@example.com",
      totalBilling: "1800.75",
      totalConsumption: "360.50",
    },
    {
      id: "e9d8c7b6-a5f4-3e2d-1c0b-9a8d7e6c5b4a",
      RFID: "RFID-7E6F5D4C",
      mobile: "9988776655",
      name: "Driver-12AB34CD",
      email: "driver.gamma@example.com",
      totalBilling: "2100.00",
      totalConsumption: "410.80",
    },
    {
      id: "b1a2c3d4-e5f6-7890-a1b2-c3d4e5f67890",
      RFID: "RFID-9A8B7C6D",
      mobile: "1029384756",
      name: "Driver-5D6F7A8B",
      email: "driver.delta@example.com",
      totalBilling: "1950.50",
      totalConsumption: "385.60",
    },
    {
      id: "c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f",
      RFID: "RFID-5C6D7E8F",
      mobile: "5647382910",
      name: "Driver-9E8D7C6B",
      email: "driver.epsilon@example.com",
      totalBilling: "2080.35",
      totalConsumption: "395.20",
    },
    {
      id: "d4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f90",
      RFID: "RFID-3B2A1C4D",
      mobile: "8877665544",
      name: "Driver-2C3D4E5F",
      email: "driver.zeta@example.com",
      totalBilling: "2200.10",
      totalConsumption: "420.00",
    },
    {
      id: "e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9012",
      RFID: "RFID-6F7E8D9C",
      mobile: "7766554433",
      name: "Driver-6F5E4D3C",
      email: "driver.eta@example.com",
      totalBilling: "1899.99",
      totalConsumption: "375.25",
    },
    {
      id: "f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f901234",
      RFID: "RFID-8D9C7B6A",
      mobile: "6655443322",
      name: "Driver-3C4B5A6D",
      email: "driver.theta@example.com",
      totalBilling: "2025.40",
      totalConsumption: "388.70",
    },
    {
      id: "a7b8c9d0-e1f2-3a4b-5c6d-7e8f90123456",
      RFID: "RFID-0F1E2D3C",
      mobile: "5544332211",
      name: "Driver-1A2B3C4D",
      email: "driver.iota@example.com",
      totalBilling: "2150.00",
      totalConsumption: "395.00",
    },
  ];
  // const displayDrivers = [...drivers, ...dummyDrivers];

  return (
    <>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>RFID</TableCell>
            <TableCell>Energy Consumed</TableCell>
            <TableCell>Total Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyDrivers.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: "1.2rem", cursor: "pointer" }}>
                <span
                  onClick={() => handleOpenModal(row)}
                  style={{ cursor: "pointer" }}
                >
                  {row.name}
                </span>
              </TableCell>
              <TableCell>{row.RFID}</TableCell>
              <TableCell>{`${row.totalConsumption} kWh`}</TableCell>
              <TableCell>{row.totalBilling}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>{/* <Pagination /> */}</TableFooter>
      </CustomTable>

      {/* Modal with Form Inside */}
      
    </>
  );
}

export default DriverTable;
