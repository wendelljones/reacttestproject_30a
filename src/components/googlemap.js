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
        title: "San Francisco",
        info: "San Francisco is a city in California, located in the northern part of the state between the Pacific Ocean and San Francisco Bay. It's the 4th largest city in California and the 17th largest in the United States, with a population of 873,965 in 2020. San Francisco is known for its unique architecture, steep hills, and the Golden Gate Bridge, and is also the economic and cultural center of the San Francisco Bay Area.",
        image: "./images/sanFrancisco_300x200.jpg",
    },
    {
        position: { lat: 32.7767, lng: -96.7970 },
        title: "Dallas Texas",
        info: "Dallas, a modern metropolis in north Texas, is a commercial and cultural hub of the region. Downtown’s Sixth Floor Museum at Dealey Plaza commemorates the site of President John F. Kennedy’s assassination in 1963. In the Arts District, the Dallas Museum of Art and the Crow Collection of Asian Art cover thousands of years of art. The sleek Nasher Sculpture Center showcases contemporary sculpture.",
        image: "./images/dallasSkyline_300x185.jpg",
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
                    content: `<div class="marker-content">${marker.title}</div>`
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `
                            <h2>${marker.title}</h2>
                            <p>${marker.info}</p>
                    `,
                });

                markerElement.addListener("click", () => {
                    infoWindow.open({
                        anchor: markerElement,
                        map: mapRef.current,
                    });
                });
            });
        } else {
            console.error('I could not us AdvancedMarkerElement because React does not have an import for it');
            markers.forEach(marker => {
                const fallbackMarker = new google.maps.Marker({
                    position: marker.position,
                    map: mapRef.current,
                    title: marker.title,
                });
                
                const infoWindow = new google.maps.InfoWindow({
                    content: `
                    <div class="info-window">
                    <img src="${marker.image}" />
                    <h2>${marker.title}</h2>
                    <p>${marker.info}</p>
                    </div>`,
                });

                fallbackMarker.addListener("click", () => {
                    infoWindow.open(mapRef.current, fallbackMarker);
                });
            });
        }
    };

    return (
        <div className="pageTitle">
            <h1>This is a GoogleMap API</h1>
            <div className="mapbox">
                <LoadScript
                    googleMapsApiKey={API_KEY}
                    libraries={['places']}
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={5}
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
