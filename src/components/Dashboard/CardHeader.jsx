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
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function CardHeader(props) {
  const { setRefresh } = useContext(MyContext);

  const currentUrl = window.location.pathname;
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
            {props.cardName === "Quick Quote" && (
              <KeyboardDoubleArrowRightIcon sx={{ color: "secondary.main" }} />
            )}
            {props.cardName === "Pending Quotes" && (
              <UpdateIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            )}
            {props.cardName === "New Leads" && (
              <MailOutlineIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            )}
            {props.cardName === "Popular destinations & packages" && (
              <AirplaneTicketOutlinedIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            )}

            {props.cardName === "Team Chat" && (
              <ChatBubbleOutlineIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            )}
            {props.cardName === "Revenue" && (
              <SignalCellularAltIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            )}
            {props.cardName === "Potential Revenue" && (
              <PieChartOutlineIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            )}
            {props.cardName === "Close Ratios" && (
              <HandshakeIcon
                sx={{ color: "secondary.main", display: ["none", "flex"] }}
              />
            )}
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
              <RestartAltIcon sx={{"&:hover": {transform: "scale(1.4)"}}}/>
            </IconButton>
          ) : undefined}
          {props.cardName !== "Pending Quotes" ? (
            <Link to="/">
              <IconButton size="large">
                <FullscreenExitIcon sx={{"&:hover": {transform: "scale(1.2)"}}}/>
              </IconButton>
            </Link>
          ) : (
            <Link to={currentUrl !== "/quotes" ? "/quotes" : "/"}>
              <IconButton size="large">
                <FullscreenExitIcon sx={{"&:hover": {transform: "scale(1.2)"}}}/>
              </IconButton>
            </Link>
          )}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
