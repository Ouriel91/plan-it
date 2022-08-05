import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import {Link} from "react-router-dom";
import logo from '../../../../../images/app-logo.png'
import defaultUser from '../../../../../images/default-user.png'


const Navbar = ({ event, user }) => {
  const image = user.image === '' ? defaultUser : user.image 

  return (
    <div className="navbar-event">
      <div className="wrapper-event">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Plan it." height={90} width={90} />
          </Link>
          <div className="navbar-title" >
            <a style={{color: "#555", textDecoration: "none"}} href="/" >Plan it.</a>
            <p className="navbar-sub-title">
              Friends, Plan, Travel
            </p>
          </div>

          <div className="centered-title-container">
            <p className="centered-title">{event.headline}</p>
          </div>
        </div>
        <div >
          <Link to="/my-events">my events</Link>
          <img className="user-image" src={image} alt={user.name} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
