import {useEffect} from 'react'
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import EventsType from "../../components/EventsType/EventsType";
import Location from "../../components/Location/Location";
import React,{useState} from "react";
import Weather from "../../components/Weather/Weather";
import ItemListConnector from "../../components/ItemList/ItemListConnector"
import ItemList from "../../components/ItemList/ItemList";
import Footer from "../../../../Footer/Footer";
// import ImgUploader from "../../components/ImgUploader/ImgUploader,";
// import UserList from "../../components/UserCard/UserList";
const Home = ({event}) => {
  console.log("home",event)
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [date, setDate] = useState("")
  
  const getGeocode = async() => {
    const orgAddress = event.location
    let address = orgAddress.replaceAll(" ", "+")
    
    const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    const response = await data.json()
    const results = response.results
    setLat(results[0].geometry.location.lat)
    setLng(results[0].geometry.location.lng)

    const orgDate = event.date
    let date = new Date(orgDate).toISOString().slice(0, 10)   
    setDate(date)
  }

  useEffect(() => {
    getGeocode()
  },[])

  return (
    <div className="home">

      <div className="homeContainer">

        <Navbar event={event}/>
        <h1 style={{color: '#000', fontWeight: 'bold'}}>{event.headline}</h1>
        <h1 style={{color: '#000', fontWeight: 'bold'}}>{event.date}</h1>
        <div className="EventsTypes">
          <EventsType event={event} />
        </div>
        <Location lat={parseInt(lat)} lng={parseInt(lng)} />
        <Weather lat={lat} lng={lng} location={event.location} date={date}/>
        <div className="charts">
          {/* <ImgUploader/> */}
          {/* <UserList/> */}
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Event List</div>
          <ItemListConnector event={event} />
        </div> */}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
