import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTheme } from "@mui/material/styles";

const data = [
  { name: "Active", value: 12 },
  { name: "Available", value: 25 },
  { name: "Faulty", value: 8 },
];

// Your custom color palette
const COLORS = ["#0077B6", "#90E0EF", "#CAF0F8"];

const ConnectorsPieChart = () => {
  const theme = useTheme();

  return (
    <div style={{ height: "100%", width: "100%", padding: "1rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ name, value }) => `${name}: ${value}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "0.9rem",
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.grey[200],
            }}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "0.9rem",
              paddingLeft: "1rem",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConnectorsPieChart;
