import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/WhatsApp';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import bbqImage from '../../images/card cliparts/bbq_clipart.png'
import poolImage from '../../images/card cliparts/pool_clipart.png'
import campingImage from '../../images/card cliparts/camping_clipart.png'
import partyImage from '../../images/card cliparts/party_clipart.png'
import otherImage from '../../images/card cliparts/other_clipart.png'
import {useNavigate} from 'react-router-dom'
import "./CardItem.css"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardItem = ({plan, deleteEventAction}) => {
  const [expanded, setExpanded] = useState(false);
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
          primaryColor : "ehite",
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='card-list-container'>
      <Card sx={{ maxWidth: 345, bgcolor: typeStyle.primaryColor,mt:10, p:1}}>
      <img
          component="img"
          height="150"
          src={typeStyle.image}
          alt={plan.type}
          style={{cursor: 'pointer',marginLeft: "60px" ,justifyContent: "center", alignItems: "center"}}
          onClick={() => navigate(`/event-page/${plan.id}`)}
        />
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              OH
            </Avatar>
          }
          titleTypographyProps={{variant:'title'}}
          subheaderTypographyProps={{variant:'h4'}}
          title={plan.date}
          subheader={plan.type}
        />

        <CardContent>
          <Typography variant="h4" color="text.secondary" style={{textAlign: 'center'}}>
            {plan.headline}
          </Typography>
        </CardContent>
        <Box>
          <CardActions>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <IconButton aria-label="delete" onClick={() => deleteEventAction(plan.id)}>
                <DeleteIcon style={{fontSize: 30}}/>
              </IconButton>
              <IconButton aria-label="share">
              <a 
                href={`https://web.whatsapp.com/send?text=${plan.headline} - ${plan.type} event in ${plan.location} at ${plan.date}`}  
                rel="nofollow noopener noreferrer" 
                target="_blank">
                <ShareIcon style={{fontSize: 30, marginTop: '-15px'}}/>
              </a>              
              </IconButton>
            </div>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon style={{fontSize: 30}}/>
            </ExpandMore>
          </CardActions>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{backgroundColor: typeStyle.secondaryColor}}>
            <Typography paragraph>Location :</Typography>
            <Typography paragraph>
              {plan.location}
              {'  '}
              <a
                href={`https://waze.com/ul?q=${plan.location.replace('','%20')}&navigate=yes`} 
                target="_blank"
                rel='noreferrer'>
                Waze
              </a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default CardItem