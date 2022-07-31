import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import EventsType from "../../components/EventsType/EventsType";
import Location from "../../components/Location/Location";
import React,{useState} from "react";
import Weather from "../../components/Weather/Weather";
import Datatable from "../../components/datatable/Datatable";
import ItemList from "../../components/ItemList/ItemList"
import Example from "../../components/ItemList/TableList";
import ImgUploader from "../../components/ImgUploader/ImgUploader,";

const Home = () => {
  
  
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        <Navbar />
        <div className="EventsTypes">
          <EventsType  />
         
        </div>
        <div className="charts">
          <Location />
          <div><h1>Dates: 10/10/2010 </h1></div>
          <Weather/>
          <ImgUploader/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Event List</div>
          <Example/>
          {/* <Table /> */}
          <Datatable/>
      
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
