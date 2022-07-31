
import ItemList from "../ItemList/ItemList";
import {BrowserRouter as Router} from 'react-router-dom';
import EventPageHome from "./EventPageFiles/EventPageHome";
import { DarkModeContextProvider } from "./EventPageFiles/context/darkModeContext";


const  EventPage = () => {
  console.log("EventPage")
  return (
    
      <DarkModeContextProvider>
      <EventPageHome />
    </DarkModeContextProvider>
    
  
    
  );
}

export default EventPage;
