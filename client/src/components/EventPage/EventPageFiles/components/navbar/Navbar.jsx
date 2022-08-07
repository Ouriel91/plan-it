import "./navbar.scss";
import {Link} from "react-router-dom";
import logo from '../../../../../images/app-logo.png'
import defaultUser from '../../../../../images/default-user.png'
import { useEffect, useState } from "react";


const Navbar = ({ event, user }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    const realoadImage = user.image === '' ? defaultUser : user.image 
    setImage(realoadImage)
  },[user.image])
  
  return (
    <div className="navbar-event">
      <div className="wrapper-event">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Plan it." height={90} width={90} />
          </Link>
          <div className="navbar-title" >
            <p className="title22" >Plan it.</p>
            <p className="navbar-sub-title">
              Friends, Plan, Travel
            </p>
          </div>

          <div className="centered-title-container">
            <p className="centered-title">{event.headline}</p>
          </div>
        </div>
        <div >
          <Link to="/my-events" className="my-events22">My Events</Link>
          <img className="user-image" src={image} alt={user.name} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
