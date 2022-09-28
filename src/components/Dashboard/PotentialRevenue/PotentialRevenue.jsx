import CardHeader from "../CardHeader";
import { Box } from "@mui/material";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

export default function PotentialRevenue() {
  const data = [
    { name: "Geeksforgeeks", value: 400 },
    { name: "Technical scripter", value: 700 },
    { name: "Geek-i-knack", value: 200 },
    { name: "Geek-o-mania", value: 1000 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const SCOLORS = ["#FFBB28", "#FF8042", "#00C49F", "#0088FE"];
  const TCOLORS = ["#FF8042", "#FFBB28", "#0088FE", "#00C49F"];
  return (
    <Box>
      <CardHeader cardName="Potencial De Vendas" />
      <Box sx={{ display: "flex" }}>
        <ResponsiveContainer width="33%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="33%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={SCOLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="33%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={TCOLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
