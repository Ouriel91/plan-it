import { GoogleMap, MarkerF } from "@react-google-maps/api";
import './Location.css'

const google = window.google
function Location({lat, lng}) {
    
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