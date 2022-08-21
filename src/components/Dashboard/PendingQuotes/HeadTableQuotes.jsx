import { Thead, Tr, Th } from "react-super-responsive-table";
import { Box } from "@mui/material";

export default function HeadTableQuotes(props) {
  const value = props.fullHeadValues;
  return (
    <Box
      sx={{
        fontSize: ["0.8rem", "0.8", "1.1rem"],
        "& .fullSize": value === undefined ? { display: "none" } : undefined,
      }}
      component={Thead}
    >
      <Tr>
        <Th>ID #</Th>
        <Th>NAME</Th>
        <Th>FROM</Th>
        <Th>DESTINATION</Th>
        <Th className="fullSize">DEPART DATE</Th>
        <Th className="fullSize">RETURN DATE</Th>
        <Th className="fullSize">PEOPLE</Th>
        <Th className="fullSize transport">TRANSPORTATION</Th>
        <Th className="fullSize">SETTINGS</Th>
      </Tr>
    </Box>
  );
}
