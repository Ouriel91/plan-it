
import ItemList from "../ItemList/ItemList";
import App from "./ex3/App"
import {BrowserRouter as Router} from 'react-router-dom';
import EventPageHome from "./EventPageFiles/EventPageHome";
import { DarkModeContextProvider } from "./EventPageFiles/context/darkModeContext";


const  EventPage = () => {
  return (
    
      <DarkModeContextProvider>
      <EventPageHome />
    </DarkModeContextProvider>
    
  
    
  );
}

export default EventPage;
