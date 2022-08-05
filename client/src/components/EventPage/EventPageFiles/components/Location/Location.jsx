import {useEffect} from 'react';
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";
import './Location.css'
import loading_gif from '../../../../../images/loading_gif.gif'
function Location({lat, lng}) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    const importImageLocation = async(lat, lng) => {
        console.log(lat, lng)
        //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        /* const nearbyReq = await fetch(`https://cryptic-headland-94862.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        const nearbyRes = await nearbyReq.json()
        console.log(nearbyRes);
        console.log(nearbyReq); */
    }

    useEffect(() => {
        if(lat === 0 && lng === 0) return
        importImageLocation(lat, lng)
    },[lat, lng]);

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