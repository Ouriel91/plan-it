import { useState, useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import PlacesAutocomplete from './PlacesAutoComplete'
import './Map.css'

function Map({setEventObj}) {
  
    const [selected, setSelected] = useState({lat: 43.45, lng: -80.49});
    const center = useMemo(() => ({ lat: selected.lat, lng: selected.lng }), [selected]);

    return (
        <>
        <div className="places-container">
            <PlacesAutocomplete setSelected={setSelected} setEventObj={setEventObj} />
        </div>

        <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
        >
            {selected && <MarkerF position={selected} />}
        </GoogleMap>
        </>
    );
}

export default Map