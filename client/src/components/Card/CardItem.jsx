import bbqImage from '../../images/card cliparts/bbq_clipart.png'
import poolImage from '../../images/card cliparts/pool_clipart.png'
import otherImage from '../../images/card cliparts/other_clipart.png'
import campingImage from '../../images/card cliparts/camping_clipart.png'
import partyImage from '../../images/card cliparts/party_clipart.png'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/WhatsApp';
import DeleteIcon from '@mui/icons-material/Delete';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate} from 'react-router-dom'
import "./CardItem.css"

const CardItem = ({plan, deleteEventAction}) => {
  
  const navigate = useNavigate()

  let typeStyle = {}
  switch (plan.type) {
    case 'BBQ with friends':
      typeStyle = {
        primaryColor : "white",
        secondaryColor : "#FDF1F1",
        image : bbqImage,
      }
      break;
      case 'Party':
        typeStyle = {
          primaryColor : "white",
          secondaryColor : "#F3F0FD",
          image : partyImage
        }
      break;
      case 'Pool party':
        typeStyle = {
          primaryColor : "white",
          secondaryColor : "#ECF3FC",
          image : poolImage
        }
      break;
      case 'Camping':
        typeStyle = {
          primaryColor : "white",
          secondaryColor : "#F2FAF1",
          image : campingImage
        }
      break;
      case 'Other':
        typeStyle = {
          primaryColor : "white",
          secondaryColor : "#FEFAF1",
          image : otherImage
        }
      break;

      default: 
      typeStyle = {
        primaryColor : "",
        secondaryColor : "",
        image : ""
    }
  }

  return (
      <div className='card-item-container'>
        <div className="card-item">
          <div className="card-box">
            <div className="card-content">
              <div className="card-navigate" onClick={() => navigate(`/event-page/${plan.id}`)}>
                <h3 className="card-title">{plan.headline}</h3>
                <img
                  className="card-image"
                  component="img"
                  height="150"
                  src={typeStyle.image}
                  alt={plan.type}
                  style={{cursor: 'pointer' ,justifyContent: "center", alignItems: "center"}}
                  
                />
              </div>
              <div className="card-details">
                <Avatar sx={{ bgcolor: '#2c7c1ada' }} aria-label="recipe">
                  YOU
                </Avatar>
                <h1 className="card-date">{plan.date}</h1>
              </div>
              <p>{plan.type}</p>
              
              <div className="card-footer">
                <IconButton aria-label="delete" onClick={() => deleteEventAction(plan.id)}>
                  <DeleteIcon style={{fontSize: 30, color: 'gray'}}/>
                </IconButton>
              <IconButton aria-label="share">
                {/* send in the future link to heroku event */}
                <a 
                  href={`https://web.whatsapp.com/send?text=${plan.headline} - ${plan.type} event in ${plan.location} at ${plan.date} \n`}  
                  rel="nofollow noopener noreferrer" 
                  target="_blank">
                  <ShareIcon style={{fontSize: 30, color: 'gray'}}/>
                </a>        
              </IconButton>
              <IconButton aria-label="waze">
              <a
                href={`https://waze.com/ul?q=${plan.location.replace('','%20')}&navigate=yes`} 
                target="_blank"
                rel='noreferrer'>
                <DirectionsCarFilledIcon style={{fontSize: 30 , color: 'gray'}}/>
              </a> 
              </IconButton>
              <IconButton aria-label="foward" onClick={() => navigate(`/event-page/${plan.id}`)}>
                <ArrowForwardIosIcon style={{fontSize: 30 , color: 'gray'}}/>
              </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CardItem