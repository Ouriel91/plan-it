// import EventPageHome from "./EventPageFiles/EventPageHome";
// import { DarkModeContextProvider } from "./EventPageFiles/colormode/darkModeContext";
// import Home from "./EventPageFiles/pages/home/Home"
import HomeConnector from "./EventPageFiles/pages/home/HomeConnector";
// import{getEventPageById} from '../../api/plan'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const EventPage = ({ fetchPlansWithItemsAction, events }) => {
  useEffect(() => {
    if (!events.length) {
      fetchPlansWithItemsAction();
    }
  }, []);
  const { id } = useParams();
  return <HomeConnector paramId={id} />;
};

export default EventPage;
