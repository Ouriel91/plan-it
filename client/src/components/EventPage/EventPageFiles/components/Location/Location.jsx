import { useState, useMemo, useEffect } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import './Location.css'

function Location({lat, lng}) {
  
    const [selected, setSelected] = useState({lat: 43.45, lng: -80.49});
    const center = useMemo(() => ({ lat: selected.lat, lng: selected.lng }), [selected]);

    useEffect(() => {
      setSelected({ lat, lng})
    },[])

    return (
        <>
        
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

export default Location