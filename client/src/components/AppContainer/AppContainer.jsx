/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import MultiStepDialog from '../MultiStepDialog/MultiStepDialog'
import "./AppContainer.css"
import Navbar from '../Navbar/Navbar';
import ItemList from '../ItemList/ItemList'

const  AppContainer = () => {
  const [isCreateEventClicked, setIsCreateEventClicked] = useState(false);

  return (
    <div className="App">
      <Navbar/>
      {isCreateEventClicked && <MultiStepDialog setIsCreateEventClicked={setIsCreateEventClicked}/>}
      <div className="header-text-center">
        <h3 className='title-event'>Enter New Event</h3>
        <button
          className ="btn btn-white btn-animate createplan"
          onClick={() => setIsCreateEventClicked(true)}
        >
          Create Plan
        </button>
       
      </div>
      <ItemList/>
      <div><span className='my-events'>My Events</span></div>
      {/*<CardListConnector />*/}
      {/* <Footer /> */}
    </div>
  );
}

export default AppContainer;
