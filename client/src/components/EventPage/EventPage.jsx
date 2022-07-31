<<<<<<< HEAD
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
=======
// import EventPageHome from "./EventPageFiles/EventPageHome";
// import { DarkModeContextProvider } from "./EventPageFiles/colormode/darkModeContext";
// import Home from "./EventPageFiles/pages/home/Home"
import HomeConnector from "./EventPageFiles/pages/home/HomeConnector";
// import{getEventPageById} from '../../api/plan'
const EventPage = ({}) => {
  return <HomeConnector />;
};
>>>>>>> fe8a93920f087b50ca59d11056ff5a9a3fdbf446

export default EventPage;
