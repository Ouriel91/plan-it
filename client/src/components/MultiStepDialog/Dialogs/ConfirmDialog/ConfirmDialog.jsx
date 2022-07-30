import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import {useNavigate} from 'react-router-dom';

 
const Confirm = ({nextStep, prevStep, closeDialog, style, setIsCreateEventClicked, eventObj,addEventAction}) => {
  
    const handleNextButton = (e) => {
        e.preventDefault();
        nextStep();
        setIsCreateEventClicked(false)
        addEventAction(eventObj)
    };

    const handlePrevButton = (e) => {
        e.preventDefault();
        prevStep();
    }  
    


  const navigate = useNavigate();
  
  const navigateToEventPage = () => {
    // 👇️ navigate to /event-page
    navigate('/event-page');
  };

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle>
                <Grid container justify="space-between" alignItems="center">
                <Typography variant="div">Event name</Typography>
                <IconButton onClick={closeDialog}>
                    <CloseIcon onClick={closeDialog}/>
                </IconButton>
                </Grid>
            </DialogTitle>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Event Name" secondary={eventObj.eventName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Dates" secondary={eventObj.dates} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Event Type" secondary={eventObj.eventType} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={eventObj.location} />
              </ListItem>
            </List>
            <br />

            <div style={style}>
                <Button
                color="secondary"
                variant="contained"
                onClick={handlePrevButton}
                >Back</Button>

                <Button
                color="primary"
                variant="contained"
                onClick={navigateToEventPage}
                >Confirm</Button>
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  
}

export default Confirm;
