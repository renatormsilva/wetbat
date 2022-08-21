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
  const { mapLocation, zoom } = useContext(LocationContext);

  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyA3SFMaJ3z6dcq0T6rHADZu1GtCBH3FpTU"
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
          <Marker
            position={{ lat: 37.09, lng: -95.712 }}
            onClick={() => setInfoWindowVisible(!infoWindowVisible)}
          />
          {infoWindowVisible && (
            <InfoWindow position={{ lat: 37.09, lng: -95.712 }}>
              <div></div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
}
