import { React, useState, useEffect } from 'react'
import "./EventsType.scss";
import "../../pages/home/Home";
import { Table } from "@material-ui/core";
import Aos from 'aos'
import 'aos/dist/aos.css'
import bbq_img from '../../../../../images/bbq.jpg'
import confetti from '../../../../../images/confetti.gif'
import friends from '../../../../../images/friends6.png'
import Calendar from 'react-calendar';
import "./calendar.css";
import camping_img from '../../../../../images/camping.jpg'
import other_img from '../../../../../images/other.jpg'
import pool_img from '../../../../../images/pool-party.jpg'
import party_img from '../../../../../images/party.jpg'
import NewItemInputConnector from "../NewItemInput/NewItemInputConnector"
import ItemListConnector from '../ItemList/ItemListConnector';
import clock_gif from '../../../../../images/clock2.gif'
import UserListConnector from '../Avatar/UserListConnector';
import pencil from '../../../../../images/pencil.gif'

const EventsType = ({ type, setEventObj, event }) => {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMins, setTimerMins] = useState('00')
  const [timerSecs, setTimerSecs] = useState('00')
  const [timerEnded, setTimerEnded] = useState(false)
  const [calendar, setCalendar] = useState(new Date(`${event.date}`));


  const startTimer = () => {

    const countDownDate = new Date(`${event.date}`).getTime()
    setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / (1000))

      if (distance <= 0) {
        setTimerEnded(true)
        return
      }
      setTimerDays(days)
      setTimerHours(hours)
      setTimerMins(minutes)
      setTimerSecs(seconds)
    }, 1000)
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleParticipantsChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === '') {
      alert('Event can not be empty')
      return
    }
    setInput('')
  }

  startTimer()
  useEffect(() => {
    Aos.init();
  }, []);

  let image

  switch (event.type) {
    case "BBQ with friends":
      image = bbq_img
      break;
    case "Pool party":
      image = pool_img
      break;
    case "Party":
      image = party_img
      break
    case "Camping":
      image = camping_img
      break
    case "Other":
      image = other_img
      break
    default:
      image = bbq_img
  }

  return (
    <>
      <section className='opening-sentence-container'>
        <p className='opening-sentence'>Life is short and the world is wide </p>
        <p className='opening2-sentence'>So let's get the best advanture we can! <br /> All of the necessities to plan a great gathering with your friends - in one page! <br /> Counting the days till the hangout, adding pals and making sure to bring everything you need.  </p>
      </section>

      <section >
        <div className='date-counter-holder-sentence'>
          <p className='title2'>Organize your time properly</p>
          <p className='description'>A daily reminder of your event <img className='clock' width={40} height={40} alt='clock' src={clock_gif}></img></p>
        </div>
        <div className='date-counter-holder'>
          <Calendar
            disabled={true}
            onChange={setCalendar}
            value={calendar}
            touchUi={true}
            locale="en-GB" />
          <div className='timer-container'>
            <section >
              <p className='date-number'>{timerDays}</p>
              <p className='date-text'>Days</p>
            </section>
            <section>
              <p className='date-number'>{timerHours}</p>
              <p className='date-text'>Hours</p>
            </section>
            <section>
              <p className='date-number'>{timerMins}</p>
              <p className='date-text'>Minutes</p>
            </section>
            <section>
              <p className='date-number'>{timerSecs}</p>
              <p className='date-text'>Seconds</p>
            </section>
            <img width={455} height={260} id="confetti" alt='party' src={confetti} hidden={!timerEnded ? true : undefined}></img>
          </div>

        </div>
      </section>
      <div className='participants-event-page'>
        <p className='title2'>Invite Friends</p>
        <p className='description'>Add your buddies to enjoy with you!</p>
        <UserListConnector eventId={event.id} />
        <div className='participants-container'>
          <img alt='friends' src={friends} width={500} height={400}></img>
        </div>
      </div>

      <section >
        <div className='date-counter-holder-sentence'>
          <p className='title2'>What to bring</p>
          <p className='description'>First and foremost, bring yourself. The rest is already written here <img alt='pencil' src={pencil} width={60} height={80} className='pencil-container'></img></p>
        </div>
        <div className='events-type-container'>
          <div data-aos="zoom-out" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="listContainer">
            <NewItemInputConnector event={event} />
            <Table><ItemListConnector event={event} /></Table>
          </div>
        </div>

      </section>

      <section data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='events-type-container-first-img'>
        <p data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='description-event-page'>Sit tight, enjoy a day with your friends and family </p>
        <p data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='description2-event-page'>and let us help you with the arrangments</p>
        <img width={850} height={500} style={{borderRadius: "30px", boxShadow: "1px 1px 10px 1px black", marginLeft: 250}} alt={event.type} src={image}></img>
      </section>
  
    </>
  );
};

export default EventsType;
