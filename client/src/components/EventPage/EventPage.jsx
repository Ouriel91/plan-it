import EventPageHome from "./EventPageFiles/EventPageHome";
import { DarkModeContextProvider } from "./EventPageFiles/colormode/darkModeContext";


const  EventPage = () => {
  console.log("EventPage")
  return (
   /*  
      <DarkModeContextProvider> */
      <EventPageHome />
      /* </DarkModeContextProvider> */
    
  
    
  );
}

export default EventPage;
