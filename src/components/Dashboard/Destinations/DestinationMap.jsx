import { useState } from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useContext } from "react";
import LocationContext from "../../../context/LocationContext";
export default function DestinationMap() {
  const markers = [
    {
      id: 1,
      name: "Madrid",
      position: { lat: 
        40.465040, lng: -3.717309 },
    },
    {
      id: 2,
      name: "São Paulo",
      position: { lat: -23.563167, lng: -46.603590 },
    },
    {
      id: 3,
      name: "Londres",
      position: { lat: 
        51.504858, lng: -0.105924 },
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: 40.712776, lng: -74.005974 },
    },
    {
      id: 5,
      name: "Vancouver",
      position: { lat: 49.234405, lng: -123.073437 },
    }
  ];

  const googleKey = process.env.REACT_APP_GOOGLE_KEY;
  const { mapLocation, zoom } = useContext(LocationContext);

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={googleKey}
        onError={() => {
          return console.log("opa opa");
        }}
        language={"en"}
        region={"EN"}
        version={"weekly"}
        loadingElement={<div>Loading...</div>}
      >
        <GoogleMap
          id="circles-example"
          mapContainerStyle={{
            height: "292px",
            width: "100%",
            borderRadius: "0px 0px 11px 11px",
            position: "absolute",
          }}
          zoom={zoom}
          center={mapLocation}
        >
          {markers.map(({ id, name, position }) => (
            <Marker
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
            >
              {activeMarker === id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{name}</div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  );
}
