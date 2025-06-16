import styled from "styled-components";
import { Stack } from "@mui/material";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import CustomFilter from "../ui/CustomFilter";

import CustomButton from "../ui/CustomButton";
import CustomHeading from "../ui/CustomHeading";
// import TransactionsTable from "../features/transactions/TransactionsTable";
import AutocompleteHint from "../ui/AutocompleteHint";
import TransactionsTable from '../features/transactions/TransactionsTable'
const Chargeroptions = [
  { label: "Charger 1", value: 1 },
  { label: "Charger 2", value: 2 },
  { label: "Charger 3", value: 3 },
  { label: "Charger 4", value: 4 },
  { label: "Charger 5", value: 5 },
];
const Connectoroptions = [
  { label: "Connector 1", value: 1 },
  { label: "Connector 2", value: 2 },
  { label: "Connector 3", value: 3 },
  { label: "Connector 4", value: 4 },
  { label: "Connector 5", value: 5 },
];
const Driveroptions = [
  { label: "4416454", value: 1 },
  { label: "4641454", value: 2 },
  { label: "4641454", value: 3 },
  { label: "4641454", value: 4 },
  { label: "4641644", value: 5 },
];

function Transactions() {
  return (
    <>
      <HeaderContainer>
        <CustomHeading> Transactions</CustomHeading>
        <RightContainer>
          <AutocompleteHint options={Chargeroptions} label="Transaction ID" />
          {/* <AutocompleteHint options={Connectoroptions} label="CONNECTOR NAME" /> */}
          {/* <AutocompleteHint options={Driveroptions} label="DRIVER ID" /> */}

          <CustomButton variant="contained" color="primary">
            Search
          </CustomButton>
        </RightContainer>
      </HeaderContainer>

      <TransactionsTable/>
    </>
  );
}

// Styled Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  /* background-color: aqua; */
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Space between FilterComponent and Button */
`;

export default Transactions;
