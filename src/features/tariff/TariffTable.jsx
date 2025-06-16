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
import { getTariffs } from "../../services/apiTariffs";

const TariffTable = () => {
  const {
    isLoading,
    data: Tariffs,
    error,
  } = useQuery({
    queryKey: ["Tariffs"],
    queryFn: getTariffs,
  });

  console.log(Tariffs, "clg from tarifftable");

  if (isLoading) return <Spinner />;

  return (
    // <StyledTableContainer component={Paper}>
    <>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Tariff</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Connection Fees (₹)</TableCell>
            <TableCell>Unit Basis</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tariffs.map((Tariff) => (
            <TableRow>
              <TableCell>{Tariff.tariff_name}</TableCell>
              <TableCell>{Tariff.charge}</TableCell>
              <TableCell>{Tariff.connection_fees}</TableCell>
              <TableCell>{Tariff.basis}</TableCell>
              <TableCell>⋮</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
      <TableFooter>{/* <Pagination count={count} /> */}</TableFooter>
    </>
  );
};

export default TariffTable;

// Styled Components
const HeaderContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const RightContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 16px; /* Space between FilterComponent and Button */
`;
