import { Box } from "@mui/material";
import CardHeader from "../CardHeader";
import Leads from "./Leads";
import john from "../../../images/perfil1.jpeg";
import nathan from "../../../images/perfil2.jpg";
import karen from "../../../images/perfil3.png";
import jane from "../../../images/perfil4.jpg";
export default function NewLeads() {
  const cardName = "New Leads";
  return (
    <Box>
      <CardHeader cardName={cardName} />
      <Box sx={{ display: "flex", gap: "1.6rem", flexDirection: "column" }}>
        <Leads
          name="John Smith"
          description="Hey! i want to place my package"
          photo={john}
        />
        <Leads
          name="Nathan Parker"
          description="Hey! i want to place my package"
          photo={nathan}
        />
        <Leads
          name="Karen Stuart"
          description="Hey! i want to place my package"
          photo={karen}
        />
        <Leads
          name="Jane Bailey"
          description="Hey! i want to place my package"
          photo={jane}
        />
      </Box>
    </Box>
  );
}
