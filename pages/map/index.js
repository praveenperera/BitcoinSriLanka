import React from "react";
import GoogleMapReact from "google-map-react";

const markerData = [
  {
    name: "DOLCE VITA",
    website:
      "https://www.google.com/maps/place/7.23935131310299,79.8416537046432",
    coords: {
      lat: 7.3288233,
      lng: 80.0231663,
    },
  },
  {
    name: "Tuk Tuk Rentals",
    website: "https://tuktukrental.com/",
    coords: {
      lat: 7.167407463162577,
      lng: 79.86723124980927,
    },
  },
  {
    name: "Spunky Monkey",
    website: "http://www.wakeboardcamps.com/",
    coords: {
      lat: 6.1418546,
      lng: 80.1175567,
    },
  },
];

const AnyReactComponent = ({ text, link }) => (
  <div
    style={{
      color: "white",
      background: "#3498db",
      padding: "15px 15px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
    onClick={() => {
      window.open(link, "_blank");
    }}
  >
    <p className="text-white">{text}</p>
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 7.8444,
      lng: 80.637466,
    },
    zoom: 8.15,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBgcXUwT_OSAhxLmYUlNGLsG6VOapxC8uY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markerData.map(({ coords, name, website }) => {
          return (
            <AnyReactComponent
              lat={coords.lat}
              lng={coords.lng}
              text={name}
              link={website}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
