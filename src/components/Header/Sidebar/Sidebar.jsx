import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArticleIcon from "@mui/icons-material/Article";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SupportIcon from "@mui/icons-material/Support";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%"
        
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      backgroundColor="primary.light"
    >
      <List>
        {["home", "quotes", "leads", "tours"].map((text, index) => (
          <ListItem key={text} sx={{ padding: ["15px", "20px"] }}>
            <ListItemButton
              component={Link}
              to={text}
            >
              <ListItemIcon sx={{ color: "primary.main" }}>
                {index === 0 ? <HomeIcon /> : undefined}
                {index === 1 ? <AttachMoneyIcon /> : undefined}
                {index === 2 ? <ArticleIcon /> : undefined}
                {index === 3 ? <SendIcon /> : undefined}
                {index === 4 ? <DescriptionIcon /> : undefined}
              </ListItemIcon>
              <Box color="primary.main" fontWeight={800}>
                {text}
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Invoices", "Analytics", "Team", "Admin", "Support"].map(
          (text, index) => (
            <ListItem key={text} sx={{ padding: ["10px", "20px"] }}>
              <ListItemButton
                component={Link}
                to={text}
              >
                <ListItemIcon sx={{ color: "primary.main" }}>
                  {index === 0 ? <InsertDriveFileIcon /> : undefined}
                  {index === 1 ? <AssessmentIcon /> : undefined}
                  {index === 2 ? <PeopleIcon /> : undefined}
                  {index === 3 ? <Brightness7Icon /> : undefined}
                  {index === 4 ? <SupportIcon /> : undefined}
                </ListItemIcon>
                <Box color="primary.main" fontWeight={800}>
                  {text}
                </Box>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <WidgetsIcon sx={{ color: "text.white" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
