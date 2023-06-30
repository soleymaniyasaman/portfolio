import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      center={[40.664218, 29.310819]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[40.664218, 29.310819]}>
        <Popup>Tada! Here is where I live</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Yasaman</h3>
        <span>Yasaman Soleymanizadeh</span>
        <br />
        <span>Location: Turkey; Yalova</span>
        <br />
        <span>Email: soleymani.yasaman@yahoo.com</span>
      </div>
    </MapContainer>
  );
}

export default Map;
