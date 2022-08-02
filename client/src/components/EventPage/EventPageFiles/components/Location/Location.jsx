import { GoogleMap, MarkerF } from "@react-google-maps/api";
import './Location.css'

function Location({lat, lng}) {
  
    return (
        <>
        <GoogleMap
            zoom={10}
            center={{lat, lng}}
            mapContainerClassName="map-container"
        >
            {{lat, lng} && <MarkerF position={{lat, lng}} />}
        </GoogleMap>
        </>
    );
}

export default Location