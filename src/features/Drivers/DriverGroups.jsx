import styled from "styled-components";
import CustomHeading from "../../ui/CustomHeading";
import CustomInput from "../../ui/CustomInput";
import CustomButton from "../../ui/CustomButton";
import RoundButton from "../../ui/RoundButton";
import AddIcon from '@mui/icons-material/Add';

function DriverGroups() {
    return <>
    <HeaderContainer>
        <CustomHeading>Driver Groups</CustomHeading>
        <RightContainer>
          <CustomInput label="Search Groups" />
          <CustomButton
           variant="contained"
            
          >
            Search
          </CustomButton>
          {/* <CustomButton variant="outlined"><Link to="/driverGroups"> Driver Groups </Link></CustomButton> */}
          <RoundButton >
            <AddIcon />
          </RoundButton>
        </RightContainer>
      </HeaderContainer>
      </>
}

export default DriverGroups;

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