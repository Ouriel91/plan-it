import React from 'react';
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import './Location.css'
import loading_gif from '../../../../../images/loading_gif.gif'
function Location({lat, lng}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    console.log("lat", lat)
    console.log("lng", lng)

    if (!isLoaded) return <img alt='loading' src={loading_gif}></img>;
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