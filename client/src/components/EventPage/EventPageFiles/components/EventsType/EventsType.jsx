import { React, useState, useEffect } from 'react'
import "./EventsType.scss";
import "../../pages/home/Home";
import ItemList from "../TableList/ItemList";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Weather from "../../components/Weather/Weather";
import Map from '../../../../MultiStepDialog/Dialogs/LocationDialog/Map'
import map_img from '../../../../../images/map-img.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import friends_img from '../../../../../images/friends2.gif'
import bbq_img from '../../../../../images/bbq.jpg'


const EventsType = ({ type, setEventObj }) => {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleParticipantsChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input===''){
      alert('Event can not be empty')
      return
    }
    setInput('')
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <section data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='events-type-container-first-img'>
      <p data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='description-event-page'>Sit tight, enjoy a day with your friends and family </p>
      <p data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='description2-event-page'> and let us help you with the arrangments</p>
      <img width={850} height={500} alt='BBQ' src={bbq_img}></img>
    </section>
    <section data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='events-type-container'>
      <div className="head-section">
        <div className="title-head-section">
          Add friends:
        </div>
        {/* <WatchLaterOutlinedIcon /> */}
        <div className="participants-event-page">
          <Autocomplete
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Add participants" />
          }/>
          <div className='btn-holder'>
            <button onSubmit={handleSubmit}>Add</button>
          </div>
        </div>
        <div className='li-container'>
          <ol>
              <li>gmail1@gmail.com</li>
              <li>gmail2@gmail.com</li>
              <li>gmail3@gmail.com</li>
            </ol>
        </div>
            
        {/* <div className="location-event-page">
          <Accordion sx={{ width: '300' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '300', flexShrink: 0 }}>
                Location
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>הירדנית, הכנרת, ישראל</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Location in map picture
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div> */}
        {/* <div className="weather-event-page">
          <Accordion sx={{ width: '80%' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Weather</Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                It's going too be sunny
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Weather />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div> */}
      </div>
      <div data-aos="fade-down-left" data-aos-offset="100" data-aos-easing="ease-in-out-cubic" data-aos-duration="1000" className="weather-event-page">
        <Weather />
      </div>
    </section>
    <section className='events-type-container' data-aos="flip-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
      <div className="listContainer">
          <ItemList />
        </div>
        <img alt='friends' src={friends_img}></img>
    </section>

    <section data-aos="fade-down-right" data-aos-delay="500" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <img alt='map' src={map_img} width={700} height={300}></img>
    </section>

    </>
  );
};

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
];

export default EventsType;
