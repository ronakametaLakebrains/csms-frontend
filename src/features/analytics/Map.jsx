import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import ExpandIcon from "@mui/icons-material/ZoomOutMap";
import CollapseIcon from "@mui/icons-material/ZoomInMap";

// Custom EV-style Icons
const createIcon = (color) =>
  new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    iconRetinaUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const activeIcon = createIcon("green");
const maintenanceIcon = createIcon("orange");
const comingSoonIcon = createIcon("grey");

// Station data
const stationLocations = [
  {
    name: "Connaught Place",
    city: "Delhi",
    position: [28.6139, 77.209],
    status: "Active",
    chargers: [
      { id: "CHG001", type: "Type 2", status: "Active" },
      { id: "CHG002", type: "CCS2", status: "Inactive" },
    ],
  },
  {
    name: "Dwarka Sector 10",
    city: "Delhi",
    position: [28.5684, 77.3239],
    status: "Under Maintenance",
    chargers: [
      { id: "CHG101", type: "Type 2", status: "Under Maintenance" },
      { id: "CHG102", type: "CHAdeMO", status: "Inactive" },
    ],
  },
  {
    name: "Noida Sector 62",
    city: "Noida",
    position: [28.5355, 77.3910],
    status: "Coming Soon",
    chargers: [
      { id: "CHG201", type: "CCS2", status: "Coming Soon" },
      { id: "CHG202", type: "Type 2", status: "Coming Soon" },
    ],
  },
  {
    name: "Cyber City",
    city: "Gurgaon",
    position: [28.4595, 77.0266],
    status: "Active",
    chargers: [
      { id: "CHG301", type: "Type 2", status: "Active" },
      { id: "CHG302", type: "CCS2", status: "Active" },
    ],
  },
  {
    name: "Faridabad Sector 15",
    city: "Faridabad",
    position: [28.4089, 77.3178],
    status: "Under Maintenance",
    chargers: [
      { id: "CHG401", type: "CHAdeMO", status: "Under Maintenance" },
      { id: "CHG402", type: "Type 2", status: "Inactive" },
    ],
  },
];


const MapWrapper = styled.div`
  position: ${(props) => (props.fullscreen ? "fixed" : "relative")};
  top: ${(props) => (props.fullscreen ? "0" : "auto")};
  left: ${(props) => (props.fullscreen ? "0" : "auto")};
  width: ${(props) => (props.fullscreen ? "100vw" : "100%")};
  height: ${(props) => (props.fullscreen ? "100vh" : "100%")};
  z-index: ${(props) => (props.fullscreen ? "1000" : "1")};
  border-radius: ${(props) => (props.fullscreen ? "0" : "12px")};
  background-color: #ffffff;
  box-shadow: ${(props) =>
    props.fullscreen ? "none" : "0 2px 12px rgba(0, 0, 0, 0.05)"};
  border: ${(props) => (props.fullscreen ? "none" : "1px solid #e0e0e0")};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const FullscreenButton = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 6px;
  cursor: pointer;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f7f9fc;
  }

  svg {
    color: #3f51b5;
  }
`;

const PopupContent = styled.div`
  min-width: 220px;
  padding: 4px;

  h4 {
    margin: 0 0 6px;
    font-size: 16px;
    color: #3f51b5;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  li {
    font-size: 14px;
    margin-bottom: 4px;
    font-family: "Poppins", sans-serif;
    color: #333;

    strong {
      color: #000;
    }
  }
`;

const Map = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const toggleFullscreen = () => setFullscreen((prev) => !prev);
  const centerOfDelhi = [28.6139, 77.2090];


  const getIconByStatus = (status) => {
    switch (status) {
      case "Active":
        return activeIcon;
      case "Under Maintenance":
        return maintenanceIcon;
      case "Coming Soon":
        return comingSoonIcon;
      default:
        return activeIcon;
    }
  };

  const mapElement = (
    <MapWrapper fullscreen={fullscreen}>
      <MapContainer
        center={centerOfDelhi}
        zoom={9}
        attributionControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {stationLocations.map((station, index) => (
          <Marker
            key={index}
            position={station.position}
            icon={getIconByStatus(station.status)}
          >
            <Popup>
              <PopupContent>
                <h4>{station.city} – {station.name}</h4>
                <ul>
                  {station.chargers.map((charger, idx) => (
                    <li key={idx}>
                      ⚡ <strong>{charger.id}</strong> — {charger.type} —{" "}
                      <span
                        style={{
                          color:
                            charger.status === "Active"
                              ? "#4CAF50"
                              : charger.status === "Inactive"
                              ? "#F44336"
                              : "#FFA000",
                          fontWeight: 500,
                        }}
                      >
                        {charger.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </PopupContent>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <FullscreenButton onClick={toggleFullscreen}>
        {fullscreen ? <CollapseIcon /> : <ExpandIcon />}
      </FullscreenButton>
    </MapWrapper>
  );

  return fullscreen
    ? ReactDOM.createPortal(mapElement, document.body)
    : mapElement;
};

export default Map;
