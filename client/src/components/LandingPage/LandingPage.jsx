/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import MultiStepDialog from '../MultiStepDialog/MultiStepDialog'
import "./LandingPage.css"
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import video_logo from '../../images/picnic-logo.mp4';
import app_logo from '../../images/app-logo.png';

const LandingPage = () => {
  const [isCreateEventClicked, setIsCreateEventClicked] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <video src={video_logo} autoPlay loop muted></video>
          {/* <img src={app_logo} alt="Plan_It" height="60px" width="60px"></img> */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Plan it.
            {/* <i className='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/my-events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Events
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <button className="btn--outline">SIGN UP</button>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
        <div className="App">
          {isCreateEventClicked && <MultiStepDialog setIsCreateEventClicked={setIsCreateEventClicked} />}
          <div className="header-text-center">
            <button
              className="createplan"
              onClick={() => setIsCreateEventClicked(true)}>
              Create Plan
            </button>
          </div>
          {/*<CardListConnector />*/}
        </div>
      </nav>
    </>
  );

}

export default LandingPage;
