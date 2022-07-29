import React from 'react'
import "./AboutUsCards.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function AboutUsCards() {
  return (
    <ul className='about-us-container'>
      <li className='first-card'>
        <div className='card-title'>Easy Arrangment</div>
        <p>This application helps the user to</p>
      </li>
      <li className='second-card'>
        <div className='card-title'>Equipment Suggestions</div>
        <p>The application offers the user a list of equipment </p>
      </li>
      <li className='third-card'>
        <div className='card-title'>Cool Spots</div>
        <p>After signing up</p>
      </li>
    </ul>
  )
}

export default AboutUsCards