import { Box } from "@mui/material";
import CardHeader from "../CardHeader";
import Chats from "./Chats";
import john from "../../../images/perfil1.jpeg";
import nathan from "../../../images/perfil2.jpg";
import karen from "../../../images/perfil3.png";
import jane from "../../../images/perfil4.jpg";

export default function TeamChat() {
  const cardName = "Chat";
  return (
    <Box>
      <CardHeader cardName={cardName} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "21rem",
        }}
      >
        <Chats
          name="Jorge Bush"
          description="Coustumer service available"
          photo={john}
        />
        <Chats
          name="Joseph Andrew"
          description="Coustumer service available"
          photo={jane}
        />

        <Chats
          name="Stuart Little"
          description="Coustumer service available"
          photo={karen}
        />
        <Chats
          name="Peter Jackson"
          description="Coustumer service available"
          photo={nathan}
        />
      </Box>
    </Box>
  );
}
