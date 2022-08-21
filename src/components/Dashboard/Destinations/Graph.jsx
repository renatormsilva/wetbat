import { Box, Button } from "@mui/material";
import { useContext } from "react";
import LocationContext from "../../../context/LocationContext";

export default function Graph(props) {
  const { setMapLocation, setZoom } = useContext(LocationContext);
  function changeLocation() {
    setMapLocation(props.location);
    setZoom(9);
  }
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          component={Button}
          onClick={changeLocation}
          sx={{
            fontWeight: "700",
            color: "text.secondary",
            width: "0.8rem",
            minWidth: "98px",
            textAlign: "initial",
            padding: "0",
          }}
        >
          {props.city}
        </Box>
        <Box sx={{ width: "190px", height: "8px" }}>
          <Box
            sx={{
              backgroundColor: props.color,
              height: "10px",
              width: props.size,
              borderRadius: "32px",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
