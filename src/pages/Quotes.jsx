import { Box } from "@mui/material";
import PendingQuotes from "../components/Dashboard/PendingQuotes/PendingQuotes";
export default function Quotes() {
  const pageHeadValues = [
    "ID #",
    "NAME",
    "FROM",
    "DESTINATION",
    "DEPART DATE",
    "RETURN DATE",
    "PEOPLE",
    "TRANSPORTATION",
    "SETTINGS"
  ];
  
  return (
    <Box
      sx={{
        widht: "100%",
        height: "100%",
        display: "block",
        backgroundColor: "white",
        margin: "23px",
        padding: "12px",
        borderRadius: "12px"
      }}
    >
      <PendingQuotes cardLink="/" pageHeadValues={pageHeadValues} />
    </Box>
  );
}
