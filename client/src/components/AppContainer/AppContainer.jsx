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
      {isCreateEventClicked && <MultiStepDialog setIsCreateEventClicked={setIsCreateEventClicked}/>}
      <div className="header-text-center">
        <button
          className ="createplan"
          onClick={() => setIsCreateEventClicked(true)}>
          Create Plan
        </button>
       
      </div>
      {/* <ItemList/> */}
      {/*<CardListConnector />*/}
      {/* <Footer /> */}
    </div>
  );
}

export default AppContainer;
