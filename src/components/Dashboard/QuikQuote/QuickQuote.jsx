import { Box } from "@mui/material";
import CardHeader from '../CardHeader'
import Form from "./Form";

export default function QuickQuote() {
  const cardName = 'Quick User'
  return (
    <Box>
      <CardHeader cardName={cardName}/>
      <Box sx={{ marginTop: "0.8rem" }}>
        <Form />
      </Box>
    </Box>
  );
}
