import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import '../styles/googlemap.css';

const containerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '15px'
};

const center = {
    lat: 35.519119,
    lng: -108.739769
};

const markers = [
    {
        position: { lat: 37.780079, lng: -122.420174 },
        title: "Marker 1",
        info: "This is the first marker's info window."
    },
    {
        position: { lat: 32.7767, lng: -96.7970 }, // Example coordinates for Dallas, Texas
        title: "Marker 2",
        info: "This is the second marker's info window."
    }
];

const API_KEY = "AIzaSyCw-T8ae_M-ieKNzowz2XMm_Rc-rB3vRSM";
const MAP_ID = "17c5b936d351f783";

function Gmap() {
    const mapRef = useRef(null);

    const onLoad = (map) => {
        mapRef.current = map;

        const { google } = window;

        if (google && google.maps && google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
            markers.forEach(marker => {
                const markerElement = new google.maps.marker.AdvancedMarkerElement({
                    position: marker.position,
                    map: mapRef.current,
                    title: marker.title,
                    content: `<div class="marker-content">${marker.title}</div>` // Customize the content if needed
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `<div><h2>${marker.title}</h2><p>${marker.info}</p></div>`,
                });

                markerElement.addListener("click", () => {
                    infoWindow.open({
                        anchor: markerElement,
                        map: mapRef.current,
                    });
                });
            });
        } else {
            console.error('AdvancedMarkerElement is not available. Falling back to standard markers.');
            markers.forEach(marker => {
                const fallbackMarker = new google.maps.Marker({
                    position: marker.position,
                    map: mapRef.current,
                    title: marker.title,
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `<div><h2>${marker.title}</h2><p>${marker.info}</p></div>`,
                });

                fallbackMarker.addListener("click", () => {
                    infoWindow.open(mapRef.current, fallbackMarker);
                });
            });
        }
    };

    return (
        <div className="pageTitle">
            <h1>This is a Google API map</h1>
            <div className="mapbox">
                <LoadScript
                    googleMapsApiKey={API_KEY}
                    libraries={['places']}
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={5.5}
                        options={{
                            mapId: MAP_ID
                        }}
                        onLoad={onLoad}
                    >
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
}

export default Gmap;
