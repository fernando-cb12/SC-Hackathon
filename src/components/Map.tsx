import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Define marker data
interface MarkerData {
  id: number;
  position: [number, number]; // [latitude, longitude]
  name: string;
  image: string;
  description: string;
}

const MapComponent: React.FC = () => {
  // Hermosillo coordinates (center of the map)
  const hermosillo: [number, number] = [29.0729, -110.9559];

  // Define two markers in Hermosillo
  const markers: MarkerData[] = [
    {
      id: 1,
      position: [29.0812, -110.9567],
      name: "Perrito perdido",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ455Hmpf2x6EeNRtrZjJyxXgBtoNlJWh26w&s", // Placeholder image
      description:
        "Me encontre a este perrito en la calle, no tiene collar y parece perdido. ¿Alguien lo conoce?",
    },
    {
      id: 2,
      position: [29.0659, -110.9728], // Cerro de la Campana
      name: "Perrita rescatada",
      image:
        "https://mvsnoticias.com/u/fotografias/m/2023/7/3/f1280x720-547000_678675_5050.jpg", // Placeholder image
      description:
        "La rescaté de la calle, está muy asustada pero es muy cariñosa. Busco un hogar temporal o definitivo para ella.",
    },
  ];

  // Custom icon for markers with images
  const createCustomIcon = () => {
    return new L.Icon({
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      shadowSize: [41, 41],
    });
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <h1 className="text-2xl font-bold p-4 bg-blue-700 text-white">
        ¿Me conoces?
      </h1>
      <div className="flex-1">
        <MapContainer
          center={hermosillo}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              icon={createCustomIcon()}
            >
              <Popup>
                <div className="flex flex-col items-center p-2">
                  <h2 className="text-lg font-bold mb-2">{marker.name}</h2>
                  <img
                    src={marker.image}
                    alt={marker.name}
                    className="w-64 h-40 object-cover mb-2"
                  />
                  <p className="text-sm">{marker.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
