import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Sample data for chargers
const chargers = [
  {
    id: 1,
    name: "Charger A",
    type: "Wall Charger",
    power: "30W",
    price: "$29.99",
  },
  {
    id: 2,
    name: "Charger B",
    type: "Car Charger",
    power: "60W",
    price: "$39.99",
  },
  {
    id: 3,
    name: "Charger C",
    type: "Wireless Charger",
    power: "15W",
    price: "$49.99",
  },
  {
    id: 4,
    name: "Charger D",
    type: "Fast Charger",
    power: "100W",
    price: "$79.99",
  },
  {
    id: 5,
    name: "Charger E",
    type: "Travel Charger",
    power: "45W",
    price: "$59.99",
  },
  {
    id: 6,
    name: "Charger F",
    type: "USB-C Charger",
    power: "65W",
    price: "$69.99",
  },
  {
    id: 7,
    name: "Charger G",
    type: "Laptop Charger",
    power: "90W",
    price: "$89.99",
  },
  {
    id: 8,
    name: "Charger H",
    type: "Car Charger",
    power: "50W",
    price: "$34.99",
  },
  {
    id: 9,
    name: "Charger I",
    type: "Wall Charger",
    power: "18W",
    price: "$19.99",
  },
  {
    id: 10,
    name: "Charger J",
    type: "Wireless Charger",
    power: "10W",
    price: "$25.99",
  },
  {
    id: 11,
    name: "Charger K",
    type: "Fast Charger",
    power: "120W",
    price: "$99.99",
  },
  {
    id: 12,
    name: "Charger L",
    type: "Power Bank Charger",
    power: "20000mAh",
    price: "$59.99",
  },
];

// Calculate statistics
const chargerStats = {
  totalChargers: chargers.length,
  totalPrice: chargers.reduce(
    (sum, charger) => sum + parseFloat(charger.price.slice(1)),
    0
  ),
  averagePower:
    chargers.reduce((sum, charger) => sum + parseFloat(charger.power), 0) /
    chargers.length,
};

// Styled Components
const DashboardContainer = styled.div`
  margin: 20px;
  font-family: "Arial", sans-serif;
`;

const DashboardTitle = styled.h1`
  text-align: center;
  color: #333;
`;

const DataTagsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const DataTag = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  font-size: 18px;
`;

const ChartContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BarChart = () => {
  const chartData = {
    labels: chargers.map((charger) => charger.name), // Charger names on x-axis
    datasets: [
      {
        label: "Power Output (W)",
        data: chargers.map((charger) => parseFloat(charger.power)),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Charger Power Outputs",
      },
      legend: {
        position: "top",
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>Charger Dashboard</DashboardTitle>
      {/* Data Tags */}
      <DataTagsContainer>
        <DataTag>
          <h3>Total Chargers</h3>
          <p>{chargerStats.totalChargers}</p>
        </DataTag>
        <DataTag>
          <h3>Total Price ($)</h3>
          <p>${chargerStats.totalPrice.toFixed(2)}</p>
        </DataTag>
        <DataTag>
          <h3>Average Power (W)</h3>
          <p>{chargerStats.averagePower.toFixed(2)} W</p>
        </DataTag>
      </DataTagsContainer>

      {/* Bar Chart */}
      <ChartContainer>
        <BarChart />
      </ChartContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
