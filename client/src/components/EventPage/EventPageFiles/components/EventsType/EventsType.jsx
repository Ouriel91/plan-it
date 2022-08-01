import "./EventsType.scss";

const EventsType = ({ event }) => {
  return (
    <div className= "head-section">
    <h1 className="title-head-section">{event.headline}</h1></div>
  );
};

export default EventsType;
