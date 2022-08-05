import {useEffect} from 'react'
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import EventsType from "../../components/EventsType/EventsType";
import Location from "../../components/Location/Location";
import {useState} from "react";
import Weather from "../../components/Weather/Weather";
import Footer from "../../../../Footer/Footer";
import {useParams} from 'react-router-dom'
import location_gif from '../../../../../images/location.gif'
import loading_gif from '../../../../../images/loading_gif.gif'

// import ImgUploader from "../../components/ImgUploader/ImgUploader,";
// import UserList from "../../components/UserCard/UserList";

const Home = ({event, user}) => {
  const [lat, setLat] = useState(0.0)
  const [lng, setLng] = useState(0.0)
  const [date, setDate] = useState("")
  
  const getGeocode = async() => {
    const orgAddress = event.location
    let address = orgAddress.replaceAll(" ", "+")
    
    const data = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    const response = await data.json()
    const results = response.results
    const currLat = parseFloat(results[0].geometry.location.lat)
    const currLng = parseFloat(results[0].geometry.location.lng)
    setLat(currLat)
    setLng(currLng)

    const orgDate = event.date
    let date = new Date(orgDate).toISOString().slice(0, 10)   
    setDate(date)
  }


  useEffect(() => {
    getGeocode()
  },[event])

  if(!event)return <div className='center-loading'><img className='center-loading-img' alt='loading' src={loading_gif}></img></div>
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar event={event} user={user}/>
        <div className="EventsTypes">
          <EventsType event={event} />
        </div> 
        <div className='date-counter-holder-sentence'>
        <p className='title'>Check out your destination</p>
        <p className='description'>Don't forget to check up on the weather of your desired location!  <img className='clock' width={30} height={50} loop alt='clock' src={location_gif}></img></p>
        </div>
        <div className='weather-location-container'>
          <Location lat={lat} lng={lng} />
          <Weather lat={lat} lng={lng} location={event.location} date={date}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
