import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import '../styles/vanillamap.css';
    
    const containerStyle = {
        width: '100%',
        height: '400px',
        borderRadius: '15px'
    };

    const center = {
        lat: 37.780079,
        lng: -122.420174
    };

    const API_KEY = "AIzaSyCw-T8ae_M-ieKNzowz2XMm_Rc-rB3vRSM";
    const MAP_ID = "17c5b936d351f783";

    function VanillaMap() {
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
                </GoogleMap>
            </LoadScript>
            </div>
            </div>
        );
    }
            

export default VanillaMap;