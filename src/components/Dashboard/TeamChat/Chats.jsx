import { Box } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
export default function Chats(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Box sx={{position: "relative"}}>
          <Box
            component="img"
            src={props.photo}
            sx={{
              objectFit: "cover",
              width: "3.4rem",
              height: "3.4rem",
              borderRadius: "10px",
              boxShadow: "  rgba(0, 0, 0, 0.35) 0px 6px 10px",
              border: "solid 1px green "
            }}
          />
          <Box sx={{ width: "12px",height: "12px",backgroundColor: "secondary.main", position: "absolute", top: -5, right: -5, borderRadius: "50%"}}>
            
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "initial",
            marginLeft: "1.2rem",
          }}
        >
          <Box sx={{ color: "text.primary", fontWeight: "600" }}>
            {props.name}
          </Box>
          <Box sx={{ color: "text.secondary", fontWeight: "500" }}>
            {props.description}
          </Box>
        </Box>
      </Box>
      <MessageIcon sx={{color: "secondary.main"}}/>
    </Box>
  );
}
