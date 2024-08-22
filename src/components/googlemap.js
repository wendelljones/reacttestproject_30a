import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import '../styles/googlemap.css';
    
    const containerStyle = {
        width: '100%',
        height: '400px',
        borderRadius: '15px'
    };

    const center = {
        lat: 35.519119,
        lng: -108.739769
    };

    const markers =  [
        {
            position: { lat: 37.818330, lng: -122.478500 },
            title: "Golden Gate Bridge",
            info: "Famed 4,200 ft art deco suspension bridge open to car, bike & foot traffic."
        },
        {
            position: { lat: 32.776665, lng: -96.796989 },
            title: "Dallas Texas",
            info: "Dallas, a modern metropolis in north Texas, is a commercial and cultural hub of the region. Downtown’s Sixth Floor Museum at Dealey Plaza commemorates the site of President John F. Kennedy’s assassination in 1963."
        }
    ];

    const API_KEY = "AIzaSyCw-T8ae_M-ieKNzowz2XMm_Rc-rB3vRSM";
    const MAP_ID = "17c5b936d351f783";

    function Gmap() {
        const [selectedMarker, setSelectedMarker] = useState(null);
        return (
            <div className="pageTitle">
                <h1>This is a Google API map</h1>
            <div className="mapbox">
            <LoadScript
                googleMapsApiKey={"AIzaSyCw-T8ae_M-ieKNzowz2XMm_Rc-rB3vRSM"}
                libraries={['places']}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={7}
                    options={{
                        mapId: MAP_ID
                    }}
                >
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.position}
                            title={marker.title}
                            onClick={() => setSelectedMarker(marker)}
                        />
                    ))}

                    {selectedMarker && (
                        <InfoWindow
                            position={selectedMarker.position}
                            onCloseClick={() => setSelectedMarker(null)}
                        >
                            <div>
                                <h2>{selectedMarker.title}</h2>
                                <p>{selectedMarker.info}</p>
                            </div>
                        </InfoWindow>
                    )}                    
                </GoogleMap>
            </LoadScript>
            </div>
            </div>
        );
    }
            

export default Gmap;