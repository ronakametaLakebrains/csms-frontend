import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000, chargers: 240 },
  { month: "Feb", revenue: 3000, chargers: 139 },
  { month: "Mar", revenue: 2000, chargers: 980 },
  { month: "Apr", revenue: 2780, chargers: 390 },
  { month: "May", revenue: 1890, chargers: 480 },
  { month: "Jun", revenue: 2390, chargers: 380 },
  { month: "Jul", revenue: 3490, chargers: 430 },
];

const RevenueChargersLineChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        {/* Left Y-axis for Revenue */}
        <YAxis yAxisId="left" orientation="left" stroke="#48449a" />
        {/* Right Y-axis for Chargers */}
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        {/* <Legend /> */}
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="revenue"
          stroke="#48449a"
          activeDot={{ r: 8 }}
          name="Revenue"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="chargers"
          stroke="#e23744"
          name="Chargers"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueChargersLineChart;
