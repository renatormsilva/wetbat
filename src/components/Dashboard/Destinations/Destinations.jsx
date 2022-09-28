import { Box } from "@mui/material";
import CardHeader from "../CardHeader";
import Graph from "./Graph";
import DestinationMap from "./DestinationMap";
import { useState } from "react";
import LocationContext from "../../../context/LocationContext";
export default function Destinations() {
  const cardName = "Localizações Com Mais Vendas";
  const [mapLocation, setMapLocation] = useState({ lat: 36.706569, lng: -27.696564});
  const [zoom, setZoom] = useState(3);
  return (
    <LocationContext.Provider
      value={{ mapLocation, setMapLocation, setZoom, zoom }}
    >
      <Box>
        <CardHeader cardName={cardName} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "360px",
            alignItems: "flex-end",
            position: "relative"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              opacity: "0.8",
              zIndex: "999",
              justifyContent: "space-around",
              margin: "1.2rem",
              height: "124px",
            }}
          >
            <Graph
              location={{ lat: 40.806384, lng: -73.959114 }}
              color="#004634"
              size="60%"
              city="New York"
            />
            <Graph
              location={{ lat: 51.507153, lng: -0.12743 }}
              color="#203b9d20"
              size="20%"
              city="London"
            />
            <Graph
              location={{ lat: -23.554741, lng: -46.637263 }}
              color="#1bbc6cdd"
              size="80%"
              city="São Paulo"
            />
            <Graph
              location={{ lat: 49.285006, lng: -123.116455 }}
              color="#bfdf1e"
              size="60%"
              city="Vancouver"
            />
            <Graph
              location={{ lat: 40.408597, lng: -3.697398 }}
              color="#0a2570"
              size="100%"
              city="Madrid"
            />
          </Box>
          <DestinationMap />
        </Box>
      </Box>
    </LocationContext.Provider>
  );
}
