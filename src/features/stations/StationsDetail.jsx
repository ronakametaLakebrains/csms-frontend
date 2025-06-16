import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import EvStationIcon from "@mui/icons-material/EvStation";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BoltIcon from "@mui/icons-material/Bolt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CustomHeading from "../../ui/CustomHeading";
import CustomButton from "../../ui/CustomButton";
import Stat from "../analytics/Stat";

// === STYLES ===

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 2rem;
  padding-bottom: 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  padding: 2rem;
  gap: 2rem;
  box-sizing: border-box;
`;

const StatsContainer = styled.div`
  width: 50%;
  height: 32vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid #d3e3fd;
  border-radius: 8px;
  align-items: center;
  // justify-items : center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

// New wrapper to increase width of Stat components
const StatWrapper = styled.div`
  max-width: 32rem;
  width: 100%;

  @media (max-width: 1200px) {
    max-width: 24rem;
  }

  @media (max-width: 992px) {
    max-width: 20rem;
  }
`;

const MapWrapper = styled.div`
  width: 50%;
  border: 2px solid #d3e3fd;
  border-radius: 8px;
  overflow: hidden;
  height: 32vh;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const DetailsSection = styled.div`
  margin: 0 2rem 0 2rem;
  padding: 1.5rem 2rem 0 2rem;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  height: 40vh;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  border: 1px solid #b91c1c;
  color: #b91c1c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #fee2e2;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;

  span {
    font-weight: 600;
  }
`;

const StationsDetail = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <CustomHeading>Station Name</CustomHeading>
        <CustomButton variant="outlined" color="primary" onClick={() => navigate(-1)}>
          ← Back
        </CustomButton>
      </Header>

      <Container>
        <StatsContainer>
          <StatsGrid>
            <StatWrapper>
              <Stat title="Chargers" value="5" color="red" icon={<EvStationIcon />} />
            </StatWrapper>
            <StatWrapper>
              <Stat title="Transactions" value="2" color="blue" icon={<ReceiptIcon />} />
            </StatWrapper>
            <StatWrapper>
              <Stat title="Power Consumed" value="432kW" color="yellow" icon={<BoltIcon />} />
            </StatWrapper>
            <StatWrapper>
              <Stat title="Total Revenue" value="432k.0$" color="green" icon={<MonetizationOnIcon />} />
            </StatWrapper>
          </StatsGrid>
        </StatsContainer>

        <MapWrapper>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14703.540810317554!2d73.694798!3d24.602423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e51a0f6b76ed%3A0x81b8f5e38e4ddf8!2sParas%20Hospitals%20-%20Udaipur!5e0!3m2!1sen!2sin!4v1614931093384!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </MapWrapper>
      </Container>

      <DetailsSection>
        <Tabs>
          <Link to={"/chargers"}>
            <TabButton>Associated Charger</TabButton>
          </Link>
          <Link to={"/drivers"}>
            <TabButton>Associated Drivers</TabButton>
          </Link>
          <Link to={"/transactions"}>
            <TabButton>Associated Transactions</TabButton>
          </Link>
        </Tabs>

        <InfoRow>
          <InfoItem>
            <span>Location Of Station:</span> Ashok Nagar, Udaipur, Rajasthan
          </InfoItem>
          <InfoItem>
            <span>Access Type:</span> Public
          </InfoItem>
        </InfoRow>

        <h4 style={{ marginBottom: "3.1vh", marginTop: "1.6rem" }}>Load Management :</h4>

        <InfoRow>
          <InfoItem>
            <span>Maximum Capacity:</span> 450Kw
          </InfoItem>
          <InfoItem>
            <span>Buffer Value:</span> 23Kw
          </InfoItem>
        </InfoRow>
      </DetailsSection>
    </>
  );
};

export default StationsDetail;
