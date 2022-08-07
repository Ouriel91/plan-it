import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const PlacesAutocomplete = ({ setSelected, setEventObj }) => {
    const {
      setValue,
      suggestions: {data},
      clearSuggestions,
    } = usePlacesAutocomplete();
  
    const handleSelect = async (address) => {
     
      setValue(address, false);
      clearSuggestions();
  
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setSelected({ lat, lng });
      setEventObj(prevState => ({...prevState, location: address}))
      setValue('')
    };

    const places = data.map(({ description, place_id }) => (
      {label: description, id: place_id}
    ))
    
    return (
      <Autocomplete
        disablePortal
        options={places}
        sx={{ mt: 1, ml: 20, mb: 5, width: 300 }}
        ListboxProps={{
          sx: { fontSize: 22 },
        }}
        onInputChange={(e,inputValue) => setValue(inputValue)}
        onChange={(e, selectedValue) =>selectedValue !== null ? handleSelect(selectedValue.label) : null}
        isOptionEqualToValue={(option, inputValue)=> true}
        id="tags-standard"
        renderInput={(params) => <TextField {...params} sx={{ mt: 2, outline: "3px outset #98a153ce", border: "none", borderRadius: "8px",boxShadow: "1px 8px 24px 3px rgba(0, 0, 0, 0.2)" }} 

          placeholder="Enter Location"/>
      }
      />
    );
  };

  export default PlacesAutocomplete