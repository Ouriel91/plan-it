import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import EventsType from "../../components/EventsType/EventsType";
import Location from "../../components/Location/Location";
import React,{useState} from "react";
import Weather from "../../components/Weather/Weather";
import ItemListConnector from "../../components/ItemList/ItemListConnector"
import NewItemInputConnector from "../../components/NewItemInput/NewItemInputConnector"
// import ImgUploader from "../../components/ImgUploader/ImgUploader,";
// import UserList from "../../components/UserCard/UserList";
const Home = ({event}) => {
  console.log("home",event)
  
  return (
    <div className="home">

      <div className="homeContainer">
        <Navbar />
        <h1 style={{color: '#000'}}>{event.headline}</h1>
        <div className="EventsTypes">
          <EventsType event={event} />
        </div>
        <div className="charts">
          <Location />
          <div><h1>Dates: 10/10/2010 </h1></div>
          <Weather/>
          {/* <ImgUploader/> */}
          {/* <UserList/> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Event List</div>
          <NewItemInputConnector event ={event}/> 
          <ItemListConnector event={event} />
        </div>
      </div>
    </div>
  );
};

export default Home;
