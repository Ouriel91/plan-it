import "./AboutUsNavbar.scss";
import {Link} from "react-router-dom";
import logo from './app-logo.png'
import defaultUser from './default-user.png'
import { useEffect, useState } from "react";


const AboutUsNavbar = ({ event, user }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    const realoadImage = user.image === '' ? defaultUser : user.image 
    setImage(realoadImage)
  },[user.image])
  console.log("user",user);
  

  return (
    <div className="navbar-event-about">
      <div className="wrapper-event-about">
        <div className="logo-container-about">
          <Link to="/">
            <img src={logo} alt="Plan it." height={90} width={90} />
          </Link>
          <div className="navbar-title-about" >
            <p className="title22-about" >Plan it.</p>
            <p className="navbar-sub-title-about">
              Friends, Plan, Travel
            </p>
          </div>

          {/* <div className="centered-title-container-about">
            <p className="centered-title-about">{event.headline}</p>
          </div> */}
        </div>
        <div >
          <Link to="/" className="my-events22-about-home">Home</Link>
          <Link to="/my-events" className="my-events22-about">My Events</Link>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default AboutUsNavbar;
