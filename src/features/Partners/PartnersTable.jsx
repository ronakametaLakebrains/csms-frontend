import React from "react";
import CustomTable, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
} from "../../ui/CustomTable";
import { styled } from "@mui/system";
import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getOwners } from "../../services/apiOwners";

const PartnersTable = () => {
  const {
    isLoading,
    data: owners,
    error,
  } = useQuery({
    queryKey: ["owners"],
    queryFn: getOwners,
  });

  console.log(owners, "owners data");

  if (isLoading) return <Spinner />;

  return (
    <>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Partner Name</TableCell>
            <TableCell>No. of Station</TableCell>
            <TableCell>Revenue</TableCell>
            <TableCell>Power Consumption</TableCell>
            <TableCell>Contact Details</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {owners.map((owner) => (
            <TableRow key={owner.user_id}>
              <TableCell>{owner.organisation_name}</TableCell>
              <TableCell>{owner._count.ChargingStation}</TableCell>
              <TableCell>340 $</TableCell>
              <TableCell> 435 kWh</TableCell>
              <TableCell>{owner.mobile_no}</TableCell>
              <TableCell>⋮</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
      <TableFooter>{/* <Pagination count={count} /> */}</TableFooter>
    </>
  );
};

export default PartnersTable;
