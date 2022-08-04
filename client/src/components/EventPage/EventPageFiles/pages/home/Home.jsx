import {useEffect} from 'react'
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import EventsType from "../../components/EventsType/EventsType";
import Location from "../../components/Location/Location";
import {useState} from "react";
import Weather from "../../components/Weather/Weather";
import UserList from '../../components/UserCard/UserList';
import Footer from "../../../../Footer/Footer";
import {useParams} from 'react-router-dom'
import location2_gif from '../../../../../images/location2.gif'

// import ImgUploader from "../../components/ImgUploader/ImgUploader,";
// import UserList from "../../components/UserCard/UserList";

const Home = ({event}) => {
  //console.log("home",event)
  const [lat, setLat] = useState(0.0)
  const [lng, setLng] = useState(0.0)
  const [date, setDate] = useState("")
  const params = useParams();
  
  // event = params.id ? getEvent(params.id) : event;
/*   console.log('currentEvent', currentEvent);
 */  
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
  },[])

  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar event={event}/>
        <div className="EventsTypes">
          <EventsType event={event} />
        </div> 
        <div className='date-counter-holder-sentence'>
        <p className='title'>Check out your destination</p>
        <p className='description'>Don't forget to check up on the weather of your desired location!  <img className='clock' width={30} height={50} loop alt='clock' src={location2_gif}></img></p>
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
