import React from "react";
import { styled } from "styled-components";
import {
  Table as MuiTable,
  TableHead as MuiTableHead,
  TableBody as MuiTableBody,
  TableFooter as MuiTableFooter,
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
  TableContainer as MuiTableContainer,
  Paper,
} from "@mui/material";

// Styled components
const StyledTableContainer = styled(MuiTableContainer)`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  background-color: var(--color-background-paper);
  margin-top: 1.6rem;
`;

const StyledTable = styled(MuiTable)`
  min-width: 700px;
`;

const StyledTableHead = styled(MuiTableHead)`
  background-color: #e8eaf6;

  & th {
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--color-grey-900);
    text-align: center;
  }
`;

const StyledTableFooter = styled(MuiTableFooter)`
  background-color: var(--color-grey-100);
`;

const StyledTableCell = styled(MuiTableCell)`
  color: var(--color-grey-900);
  font-size: 1.35rem;
  padding: 1.2rem;
  text-align: center;
  border-bottom: 1px solid var(--color-grey-200);
`;

const CustomTable = ({ children }) => {
  return (
    <StyledTableContainer component={Paper}>
      <StyledTable>{children}</StyledTable>
    </StyledTableContainer>
  );
};

export const TableHead = ({ children }) => (
  <StyledTableHead>{children}</StyledTableHead>
);

export const TableBody = ({ children }) => (
  <MuiTableBody>{children}</MuiTableBody>
);

export const TableFooter = ({ children }) => (
  <StyledTableFooter>{children}</StyledTableFooter>
);

export const TableRow = ({ children }) => (
  <MuiTableRow>{children}</MuiTableRow>
);

export const TableCell = ({ children, ...props }) => (
  <StyledTableCell {...props}>{children}</StyledTableCell>
);

export default CustomTable;
