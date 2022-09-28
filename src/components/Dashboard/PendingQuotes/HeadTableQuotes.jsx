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
        <Th>ID#</Th>
        <Th>REMÉDIO</Th>
        <Th>DESTINO</Th>
        <Th>QUANTIDADE</Th>
        <Th className="fullSize">DATA</Th>
        <Th className="fullSize">DIA MÁXIMO</Th>
        <Th className="fullSize">BULA</Th>
        <Th className="fullSize">NOME</Th>
        <Th className="fullSize">SETTINGS</Th>
      </Tr>
    </Box>
  );
}
