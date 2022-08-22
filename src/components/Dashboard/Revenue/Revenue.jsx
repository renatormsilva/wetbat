import { Box } from "@mui/material";
import CardHeader from "../CardHeader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "JAN", pv: 2400, amt: 2400 },
  { name: "FEB", pv: 1398, amt: 2210 },
  { name: "MAR", pv: 9800, amt: 2290 },
  { name: "APR", pv: 3908, amt: 2000 },
  { name: "MAY", pv: 4800, amt: 2181 },
  { name: "JUNE", pv: 3800, amt: 2500 },
  { name: "JULY", pv: 4300, amt: 2100 },
];

export default function Revenue() {
  return (
    <Box>
      <CardHeader cardName="Revenue" />
      <ResponsiveContainer width="95%" height={300}>
        <LineChart
          
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <YAxis />
          <XAxis dataKey="name" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
