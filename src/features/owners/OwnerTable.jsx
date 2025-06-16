import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CustomTable, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "../../ui/CustomTable";
import { Link } from "react-router-dom";
import { getOwners } from "../../services/apiOwners";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import Error from "../../ui/Error";
import CustomModal from "../../ui/Modal"; // Import the modal
import OwnerDetail from "./OwnerDetail";

const OwnerTable = () => {
  const {
    isLoading,
    data: owners,
    error,
  } = useQuery({
    queryKey: ["owners"],
    queryFn: getOwners,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);
  // Open Modal and Set Selected Owner Data
  const handleOpenModal = (owner) => {
    console.log("modal open");
    setSelectedOwner(owner);
    setIsModalOpen(true);

    setTimeout(() => {
      console.log(selectedOwner, "selectedOwner inside setTimeout");
    }, 0);
  };

  console.log(owners);
  console.log("112");

  // Save Handler (Form Submission)
  const handleSave = (data) => {
    console.log("Saved Data:", data);
    setIsModalOpen(false);
  };
  // if (error) return <Error error={error} />;
  // if (isLoading) return <Spinner />;

  //dummy data

  const dummyOwners = [
    {
      id: "d9304a67-e5b4-4d90-9e72-cfbd03ef4a80",
      name: "Customer-AC9D3E2F",
      mobile: "492537345",
      email: "customer2@example.com",
      address: {
        city: "CityY",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "1",
      totalBilling: "2050.50",
      totalConsumption: "320.15",
    },
    {
      id: "f5e1c123-4578-4b2d-9e77-ec3b6e33ccf2",
      name: "Customer-BF2E8D1C",
      mobile: "492537456",
      email: "customer3@example.com",
      address: {
        city: "CityX",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "2",
      totalBilling: "1890.75",
      totalConsumption: "295.60",
    },
    {
      id: "c3f4d908-9ea5-4e12-a3b9-ff2b7ef04a2d",
      name: "Customer-E7C4B2A1",
      mobile: "492537567",
      email: "customer4@example.com",
      address: {
        city: "CityY",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "1",
      totalBilling: "2100.00",
      totalConsumption: "330.25",
    },
    {
      id: "e2d3c456-8bfa-4b10-8e9c-df5a8e2b6d11",
      name: "Customer-98F4C3D2",
      mobile: "492537678",
      email: "customer5@example.com",
      address: {
        city: "CityX",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "1",
      totalBilling: "1950.30",
      totalConsumption: "315.40",
    },
    {
      id: "ab4d3e21-3f6b-4f21-9f1a-4b7cfae8dcd3",
      name: "Customer-D4E3F1A2",
      mobile: "492537789",
      email: "customer6@example.com",
      address: {
        city: "CityY",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "2",
      totalBilling: "2200.15",
      totalConsumption: "340.80",
    },
    {
      id: "71fa2e67-9c4b-49a2-b1c2-5d3cfe1a2b34",
      name: "Customer-1B2C3D4E",
      mobile: "492537890",
      email: "customer7@example.com",
      address: {
        city: "CityX",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "1",
      totalBilling: "2000.50",
      totalConsumption: "310.00",
    },
    {
      id: "5d3f1c29-bbfe-4b7d-8e3a-9a1b2c3d4e5f",
      name: "Customer-9A8B7C6D",
      mobile: "492537901",
      email: "customer8@example.com",
      address: {
        city: "CityY",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "2",
      totalBilling: "2150.00",
      totalConsumption: "325.50",
    },
    {
      id: "3c2d1e4f-5a6b-7c8d-9e0f-1a2b3c4d5e6f",
      name: "Customer-FEDCBA98",
      mobile: "492537012",
      email: "customer9@example.com",
      address: {
        city: "CityX",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "1",
      totalBilling: "1900.45",
      totalConsumption: "305.35",
    },
    {
      id: "2a1b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      name: "Customer-ABCDEF12",
      mobile: "492537123",
      email: "customer10@example.com",
      address: {
        city: "CityY",
        country: "CountryY",
      },
      status: "active",
      totalChargers: "1",
      totalBilling: "2050.00",
      totalConsumption: "315.00",
    },
  ];

  // const displayOwners = [...owners, ...dummyOwners];

  return (
    <>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Total Chargers</TableCell>
            <TableCell>Revenue (₹)</TableCell>
            <TableCell>Power Consumption</TableCell>
            <TableCell>Location</TableCell>
            {/* <TableCell>Action</TableCell> */}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {dummyOwners.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: "1.2rem", cursor: "pointer" }}>
                <span
                  onClick={() => {
                    console.log("Clicked on owner:", row.name); // Debugging log
                    handleOpenModal(row);
                  }}
                >
                  {row.name}
                </span>
              </TableCell>
              <TableCell>{row.totalChargers}</TableCell>
              <TableCell>{row.totalBilling}</TableCell>
              <TableCell>{`${row.totalConsumption} Wh`}</TableCell>
              <TableCell>{row.address.city}</TableCell>
              {/* <TableCell>{row.totalChargers}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
      <TableFooter>{/* <Pagination /> */}</TableFooter>
      {/* Modal with Form Inside */}
      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={"Owner Details"}
        >
          <OwnerDetail Id={selectedOwner.id} onSave={handleSave} />
        </CustomModal>
      )}
    </>
  );
};

export default OwnerTable;
