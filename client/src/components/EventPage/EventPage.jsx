import EventPageHome from "./EventPageFiles/EventPageHome";
import { DarkModeContextProvider } from "./EventPageFiles/colormode/darkModeContext";
import Home from "./EventPageFiles/pages/home/Home"
import{getEventPageById} from '../../api/plan'
const  EventPage =  ({}) => {

  //get the url from the current page
  const url = window.location.pathname;
  const check = async () =>{
  const event =  await getEventPageById(url);
  console.log(event,'eventpage');
  }
  check()
  return (
    
     
      <Home  />
      
    
  
    
  );
}

export default EventPage;
