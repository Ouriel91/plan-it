
import HomeConnector from "./EventPageFiles/pages/home/HomeConnector";
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
