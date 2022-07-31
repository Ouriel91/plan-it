import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import EventsType from "../../components/EventsType/EventsType";
import Location from "../../components/Location/Location";
import React,{useState} from "react";
import Weather from "../../components/Weather/Weather";
import ItemList from "../../components/TableList/ItemList"
import ImgUploader from "../../components/ImgUploader/ImgUploader,";

const Home = () => {
  
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="EventsTypes">
          Don't Miss The Upcoming Event...
          <EventsType  />
        </div>
        <div className="charts">
          {/* <Location /> */}
          {/* <Weather/>
          <ImgUploader/> */}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
