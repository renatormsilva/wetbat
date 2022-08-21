import { Box } from "@mui/material";
import MaintenceTwo from "../images/maintenceTwo.svg";
export default function Error() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "center"}}>
      <Box
        sx={{
          display: "block",
          margin: "0 auto",
          maxWidth: "600px",
          mt: ["4rem", "8rem"],
          position: "relative",
          width: "100%"
        }}
        component="img"
        src={MaintenceTwo}
        alt="working in progress"
      />
      <Box component="h1" sx={{mt: "1rem", color: "primary.main", fontSize:["1rem" ,"1.5rem", "2rem"]}}>UNDER CONSTRUCTION...</Box>
    </Box>
  );
}
