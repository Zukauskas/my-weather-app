import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { useMemo, useContext, useState } from "react";
import { Global } from "../context/Global.jsx";
import MarkerTable from "./MarkerTable.jsx";

const MapContainer = () => {
    const {
        markers,
        setMarkers,
        submitHandler,
        startDate,
        endDate,
        weatherVariables,
    } = useContext(Global);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.GOOGLEMAPS_API_KEY,
    });

    const center = useMemo(() => ({ lat: 54.9027, lng: 23.9096 }), []);

    const handleMapClick = (e) => {
        setMarkers((prevMarkers) => [
            ...prevMarkers,
            {
                lat: +e.latLng.lat().toFixed(6),
                lng: +e.latLng.lng().toFixed(6),
            },
        ]);
    };

    const handleRemoveMarker = (index) => {
        setMarkers((prevMarkers) => prevMarkers.filter((_, i) => i !== index));
    };

    const updateCharts = (e) => {
        if (startDate && endDate && Object.keys(weatherVariables).length > 0) {
            submitHandler(e);
        } else {
            alert("Cannot update charts. Missing required data.");
        }
    };
    return (
        <div className="map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <GoogleMap
                        mapContainerClassName="mapContainer"
                        center={center}
                        zoom={10}
                        onClick={handleMapClick}>
                        {markers.map((marker, index) => (
                            <Marker
                                key={index}
                                position={marker}
                                onClick={() => setSelectedMarker(index)}
                            />
                        ))}
                        {selectedMarker !== null && (
                            <InfoWindow
                                position={markers[selectedMarker]}
                                onCloseClick={() => setSelectedMarker(null)}>
                                <div>
                                    <p>Marker {selectedMarker + 1}</p>
                                    <p>
                                        Latitude:{" "}
                                        {markers[selectedMarker].lat.toFixed(6)}
                                    </p>
                                    <p>
                                        Longitude:{" "}
                                        {markers[selectedMarker].lng.toFixed(6)}
                                    </p>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                    <div className="markerContainer">
                        <MarkerTable
                            markers={markers}
                            onRemoveMarker={handleRemoveMarker}
                            updateCharts={updateCharts}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default MapContainer;
