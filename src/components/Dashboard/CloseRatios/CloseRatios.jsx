import { Box } from "@mui/material";
import CardHeader from "../CardHeader";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
export default function CloseRatios() {
  const data = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 400 },
  ];

  const percentage = "70%";
  const COLORS = ["#00C49F", "#FF8042"];
  return (
    <Box>
      <CardHeader cardName="Close Ratios" />
      <Box sx={{ position: "relative" }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Box
          sx={{
            fontSize: "2rem",
            position: "absolute",
            top: "50%",
            transform: "translate(50%, -50%)",
            right: "50%",
            fontWeight: "800",
            color: "primary.main"
          }}
        >
          {percentage}
        </Box>
      </Box>
    </Box>
  );
}
