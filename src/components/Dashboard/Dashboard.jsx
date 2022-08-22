import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import QuickQuote from "./QuikQuote/QuickQuote";
import PendingQuotes from "./PendingQuotes/PendingQuotes"
import About from "../Dashboard/About/About"
import NewLeadsContainer from "./NewLeads/NewLeadsContainer";
import Destinations from "./Destinations/Destinations"; 
import  TeamChat from "./TeamChat/TeamChat";
import Revenue from "./Revenue/Revenue";
import PotentialRevenue from "./PotentialRevenue/PotentialRevenue";
import CloseRatios from "./CloseRatios/CloseRatios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box >
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr) " sx={{gap: ["0rem","0rem","2rem"]}} alignItems="stretch">
        <Box gridColumn="span 12">
          <Item sx={{borderRadius: ["0px","0px","12px"], backgroundImage: 'linear-gradient(to left, #4168c7, #40c6c5)'}}><About/></Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 4"] }}>
          <Item sx={{ height: "100%", borderRadius: ["0px","0px","12px"]}}>
            <QuickQuote />
          </Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 4"] }}>
          <Item sx={{ height: "100%", borderRadius: ["0px","0px","12px"] }}>
            <PendingQuotes/>
          </Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 4"] }}>
          <Item sx={{ height: "100%", borderRadius: ["0px","0px","12px"]}}>
            <NewLeadsContainer/>
          </Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 8"] }}>
          <Item sx={{ borderRadius: ["0px","0px","12px"]}}><Destinations/></Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 4"] }}>
          <Item sx={{ borderRadius: ["0px","0px","12px"], height: "calc(100% - 16px)"}}><TeamChat/></Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 4"] }}>
          <Item sx={{ borderRadius: ["0px","0px","12px"]}}><Revenue/></Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 4"] }}>
          <Item sx={{ borderRadius: ["0px","0px","12px"]}}><PotentialRevenue/></Item>
        </Box>
        <Box sx={{ gridColumn: ["span 12", "span 12", "span 4"] }}>
          <Item sx={{ borderRadius: ["0px","0px","12px"]}}><CloseRatios/></Item>
        </Box>
      </Box>
    </Box>
  );
}
