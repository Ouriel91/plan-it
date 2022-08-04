import React from 'react';
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import './Location.css'

function Location({lat, lng}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    console.log("lat", lat)
    console.log("lng", lng)

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
        <GoogleMap
            zoom={10}
            center={{lat, lng}}
            mapContainerClassName="my-map-container-location"
        >
            {{lat, lng} && <MarkerF position={{lat, lng}} />}
        </GoogleMap>
        </>
    );
}

export default Location