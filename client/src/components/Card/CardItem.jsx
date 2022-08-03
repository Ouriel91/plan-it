import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import bbqImage from '../../images/bbq-img.jpg'
import poolImage from '../../images/pool-party.jpg'
import otherImage from '../../images/other.jpg'
import campingImage from '../../images/camping.jpg'
import partyImage from '../../images/party.jpg'
import {useNavigate} from 'react-router-dom'

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
        primaryColor : "#e31809",
        secondaryColor : "#FDF1F1",
        image : bbqImage
      }
      break;
      case 'Party':
        typeStyle = {
          primaryColor : "#B964F7",
          secondaryColor : "#F3F0FD",
          image : partyImage
        }
      break;
      case 'Pool party':
        typeStyle = {
          primaryColor : "#5D93E1",
          secondaryColor : "#ECF3FC",
          image : poolImage
        }
      break;
      case 'Camping':
        typeStyle = {
          primaryColor : "#5DC250",
          secondaryColor : "#F2FAF1",
          image : campingImage
        }
      break;
      case 'Other':
        typeStyle = {
          primaryColor : "#F9D288",
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
    <Box m={2} p={3}>
      <Card sx={{ maxWidth: 345, bgcolor: typeStyle.primaryColor,mt:10, p:1}}>
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
        <CardMedia
          component="img"
          height="194"
          src={typeStyle.image}
          alt={plan.type}
          style={{cursor: 'pointer'}}
          onClick={() => navigate(`/event-page/${plan.id}`)}
        />
        <CardContent>
          <Typography variant="h4" color="text.secondary" style={{textAlign: 'center'}}>
            {plan.headline}
          </Typography>
        </CardContent>
        <Box p={1}>
          <CardActions>
            <div style={{padding: '5px'}}>
            <IconButton aria-label="delete" onClick={() => deleteEventAction(plan.id)}>
              <DeleteIcon/>
            </IconButton>
            <IconButton aria-label="share" style={{marginLeft: '10px'}}>
            <a 
              href={`https://web.whatsapp.com/send?text=${plan.headline} - ${plan.type} event in ${plan.location} at ${plan.date}`}  
              rel="nofollow noopener noreferrer" 
              target="_blank">
              <ShareIcon />
            </a>              
            </IconButton>
            </div>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
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
    </Box>
  );
}

export default CardItem