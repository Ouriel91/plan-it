import { React, useState } from 'react'
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

const EventsType = ({ type }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>

      <div className="head-section">
        <div className="title-head-section">
          Event Name
        </div>
        {/* <WatchLaterOutlinedIcon /> */}
        <div className="date-event-page">
          30/10/2022, 19:20
        </div>
        <div className="participants-event-page">
          <Autocomplete
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Add participants" />}
          />
        </div>
        
          <div className="location-event-page">
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
          </div>
          <div className="weather-event-page">
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
          </div>

          <div className="listContainer">
            <ItemList />
          </div>
        </div>

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
