import "./CardNavbar.scss";
import {Link} from "react-router-dom";
import logo from './app-logo.png'
import defaultUser from './default-user.png'
import { useEffect, useState } from "react";


const CardNavbar = ({ event, user }) => {
//   const [image, setImage] = useState();
//   useEffect(() => {
//     const realoadImage = user.image === '' ? defaultUser : user.image 
//     setImage(realoadImage)
//   },[user.image])  

  return (
    <div className="navbar-event-card">
      <div className="wrapper-event-card">
        <div className="logo-container-card">
          <Link to="/">
            <img src={logo} alt="Plan it." height={90} width={90} />
          </Link>
          <div className="navbar-title-card" >
            <p className="title22-card" >Plan it.</p>
            <p className="navbar-sub-title-card">
              Friends, Plan, Travel
            </p>
          </div>
          <div className="centered-title-container-card">
            <p className="centered-title-card">My Events</p>
          </div>
        </div>
        <div >
          <a href="/" className="my-events22-card-home">Home</a>
          {/* <a href="/my-events" className="my-events22-card">My Events</a>     */}
        </div>
      </div>
    </div>
  );
};

export default CardNavbar;
