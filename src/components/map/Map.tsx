import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import styleClasses from "./Map.module.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../assets/images/marker-green-masjid.png";

function getIcon(_iconSize) {
  return L.icon({
    iconUrl: markerIcon,
    iconSize: [_iconSize],
  });
}

function Map() {
  console.log("Map.render()");
  return (
    <div className={`${styleClasses["map"]}`}>
      <MapContainer
        className={`${styleClasses["map__leaflet-container"]}`}
        center={[51.5453593, 7.4842446]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.5453593, 7.4842446]} icon={getIcon(40)}>
          <Popup>
            <div className={`${styleClasses["map__marker-popup"]}`}>
              <div className={`${styleClasses["map__marker-popup-heading"]}`}>
                <div className="map__marker-popup-row">
                  <span className={`${styleClasses["map__masjid-name"]}`}>
                    Dzemat Dortmund
                  </span>
                </div>
                <div className="map__marker-popup-row">
                  <span className={`${styleClasses["map__masjid-open-hours"]}`}>
                    open: Mon - Sun
                  </span>
                </div>
              </div>
              <div className={`${styleClasses["map__marker-popup-body"]}`}>
                <div className="map__marker-popup-row flex justify-between">
                  <span className={`${styleClasses["map__prayer-name"]}`}>
                    Fajr
                  </span>
                  <span className={`${styleClasses["map__prayer-time"]}`}>
                    05:38
                  </span>
                </div>
                <div className="map__marker-popup-row flex justify-between">
                  <span className={`${styleClasses["map__prayer-name"]}`}>
                    Shuruq
                  </span>
                  <span className={`${styleClasses["map__prayer-time"]}`}>
                    07:30
                  </span>
                </div>
                <div className="map__marker-popup-row flex justify-between">
                  <span className={`${styleClasses["map__prayer-name"]}`}>
                    Dhuhr
                  </span>
                  <span className={`${styleClasses["map__prayer-time"]}`}>
                    13:20
                  </span>
                </div>
                <div className="map__marker-popup-row flex justify-between">
                  <span className={`${styleClasses["map__prayer-name"]}`}>
                    Assr
                  </span>
                  <span className={`${styleClasses["map__prayer-time"]}`}>
                    16:27
                  </span>
                </div>
                <div className="map__marker-popup-row flex justify-between">
                  <span className={`${styleClasses["map__prayer-name"]}`}>
                    Maghrib
                  </span>
                  <span className={`${styleClasses["map__prayer-time"]}`}>
                    19:09
                  </span>
                </div>
                <div className="map__marker-popup-row flex justify-between">
                  <span className={`${styleClasses["map__prayer-name"]}`}>
                    Isha
                  </span>
                  <span className={`${styleClasses["map__prayer-time"]}`}>
                    20:54
                  </span>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
