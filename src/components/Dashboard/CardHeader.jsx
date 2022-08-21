import { Box, Divider } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import UpdateIcon from "@mui/icons-material/Update";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import IconButton from "@mui/material/IconButton";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

export default function CardHeader(props) {
  const { setRefresh } = useContext(MyContext);
  
  
  return (
    <Box sx={{ marginBottom: "12px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "0.3rem" }}>
          <Box>
            {props.cardName === "Quick Quote" ? (
              <KeyboardDoubleArrowRightIcon sx={{ color: "secondary.main" }} />
            ) : undefined}
            {props.cardName === "Pending Quotes" ? (
              <UpdateIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            ) : undefined}
            {props.cardName === "New Leads" ? (
              <MailOutlineIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            ) : undefined}
            {props.cardName === "Popular destinations & packages" ? (
              <AirplaneTicketOutlinedIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            ) : undefined}
          </Box>
          <Box
            sx={{
              color: "primary.main",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            {props.cardName}
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          {props.cardName === "Pending Quotes" ? (
            <IconButton onClick={() => setRefresh(false)} size="large">
              <RestartAltIcon  />
            </IconButton>
          ) : undefined}
          <Link to={props.fullHeadValues ? "/" : "/quotes"}>
            <IconButton size="large">
              <FullscreenExitIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
