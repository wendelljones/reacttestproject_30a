import React, { useState, useEffect } from "react";
import { LoadScript, GoogleMap, InfoWindow } from "@react-google-maps/api";
import '../styles/maps.css';

/* global google */

function GoogleMapFor30() {
    const [map, setMap] = useState(null);
    const [selected, setSelected] = useState(null);

    const locations = [
        { 
            lat: 37.818330,  
            lng: -122.478500, 
            name: "Golden Gate Bridge",
            description: "Famed 4,200 ft art deco suspension bridge open to car, bike & foot traffic.",
            image: "./images/goldenGate_300x169.jpg" 
        },
        {   
            lat: 32.776665,  
            lng: -96.796989, 
            name: "Dallas Texas", 
            description: "Dallas, a modern metropolis in north Texas, is a commercial and cultural hub of the region. Downtown’s Sixth Floor Museum at Dealey Plaza commemorates the site of President John F. Kennedy’s assassination in 1963. In the Arts District, the Dallas Museum of Art and the Crow Collection of Asian Art cover thousands of years of art. The sleek Nasher Sculpture Center showcases contemporary sculpture.",
            image: "./images/dallasSkyline_300x185.jpg"
        }
    ];

    useEffect(() => {
        if (map && google?.maps?.marker?.AdvancedMarkerElement) {
            locations.forEach(location => {
                const marker = new google.maps.marker.AdvancedMarkerElement({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.name
                });

                marker.addListener('click', () => {
                    setSelected(location);
                });
            });
        }
    }, [map]);

    return (
        <div className="mapDiv">
            <LoadScript
                googleMapsApiKey="AIzaSyCw-T8ae_M-ieKNzowz2XMm_Rc-rB3vRSM"
                libraries={['marker']}  // Static libraries array
            >
                <GoogleMap 
                    mapId="17c5b936d351f783"
                    mapContainerStyle={{ width: '100%', height: '450px', margin: '0px', border: '2px solid #500000', borderRadius: '15px' }}
                    center={{ lat: 35.519119, lng: -108.739769 }}
                    zoom={5}
                    onLoad={map => setMap(map)}
                >
                    {selected && (
                        <InfoWindow
                            position={{ lat: selected.lat, lng: selected.lng }}
                            onCloseClick={() => setSelected(null)}
                        >
                            <div className="locationCallout">
                                <button className="buttonStyle" onClick={() => setSelected(null)}>
                                    X
                                </button>
                                <img className="calloutImg" src={selected.image} alt={selected.name} />
                                <h4>{selected.name}</h4>
                                <p>{selected.description}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default GoogleMapFor30;