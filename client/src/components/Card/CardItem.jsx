import bbqImage from "../../images/card cliparts/bbq.jpg";
import poolImage from "../../images/card cliparts/pool_party.jpg";
import otherImage from "../../images/card cliparts/other.jpg";
import campingImage from "../../images/card cliparts/camping.jpg";
import partyImage from "../../images/card cliparts/party.jpg";
import waze from "../../images/waze.png";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/WhatsApp";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import "./CardItem.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";

const CardItem = ({ plan, deleteEventAction }) => {
  const navigate = useNavigate();
  const text = `You are invited to join an event in "Plan it." 

  Go check it out now!
  https://plan-it-monday/event-page/${plan.id.toString()}.herokuapp.com/
  <br/>
  Best wishes,
  
  Plan it. team :)`;


  let typeStyle = {};
  switch (plan.type) {
    case "BBQ with friends":
      typeStyle = {
        primaryColor: "white",
        secondaryColor: "#FDF1F1",
        image: bbqImage,
        icon: OutdoorGrillOutlinedIcon,
      };
      break;
    case "Party":
      typeStyle = {
        primaryColor: "white",
        secondaryColor: "#F3F0FD",
        image: partyImage,
        icon: CelebrationOutlinedIcon,
      };
      break;
    case "Pool party":
      typeStyle = {
        primaryColor: "white",
        secondaryColor: "#ECF3FC",
        image: poolImage,
        icon: PoolOutlinedIcon,
      };
      break;
    case "Camping":
      typeStyle = {
        primaryColor: "white",
        secondaryColor: "#F2FAF1",
        image: campingImage,
        icon: ForestOutlinedIcon,
      };
      break;
    case "Other":
      typeStyle = {
        primaryColor: "white",
        secondaryColor: "#FEFAF1",
        image: otherImage,
        icon: SentimentVerySatisfiedOutlinedIcon,
      };
      break;

    default:
      typeStyle = {
        primaryColor: "",
        secondaryColor: "",
        image: "",
        icon: "",
      };
  }

  return (
    <div className="card-item-container">
      <div className="card-item">
        <div className="card-box">
          <img
            className="card-image"
            component="img"
            height={230}
            width={340}
            src={typeStyle.image}
            alt={plan.type}
            style={{ objectFit: "cover", borderRadius: "8px 8px 0 0" }}
          />
        </div>
        <div className="card-content">
          <div
            className="card-navigate"
            onClick={() => navigate(`/event-page/${plan.id}`)}
          >
            <p className="card-title">{plan.headline}</p>
          </div>
          <div className="card-details-emoji">
            <IconButton aria-label="emoji">
              <typeStyle.icon style={{ fontSize: 30, color: 'gray' }} alt={plan.type} />
            </IconButton>
            <p className="card-details-emoji2">{plan.type}</p>
          </div>
          <div className="card-details">
            <IconButton aria-label="calendar">
              <CalendarMonthOutlinedIcon style={{ fontSize: 30 }} />
            </IconButton>
            <p className="card-date">{plan.date}</p>
          </div>
          <div className="card-details">
            <IconButton aria-label="location">
              <LocationOnOutlinedIcon style={{ fontSize: 30 }} />
            </IconButton>
            <p className="card-location">{plan.location}</p>
          </div>
          <div className="card-details">
            <button
              onClick={() => navigate(`/event-page/${plan.id}`)}
              className="go-to-btn"
              type="button"
            >
              Go to event
            </button>
          </div>
          <div className="card-footer" style={{borderTop: "1px solid rgb(206, 206, 206)"}} >
            <IconButton
              aria-label="delete"
              onClick={() => deleteEventAction(plan.id)}
            >
              <DeleteIcon className="delete-icon" style={{ fontSize: 30 }} />
            </IconButton>
            <IconButton aria-label="share">
      
              <a
                href={`https://web.whatsapp.com/send?text=${text}`}
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="whatsapp-icon"
              >
                <ShareIcon style={{ fontSize: 30 }} />
              </a>
            </IconButton>
            <a
              href={`https://waze.com/ul?q=${plan.location.replace(
                "",
                "%20"
              )}&navigate=yes`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="waze-icon"
                src={waze}
                alt="waze"
                height={35}
                width={35}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
