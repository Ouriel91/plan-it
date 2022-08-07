import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import "./ConfirmDialog.css";
import { useNavigate } from "react-router-dom";

const Confirm = ({
  prevStep,
  closeDialog,
  style,
  setIsCreateEventClicked,
  eventObj,
  addEventAction,
}) => {

  const handlePrevButton = (e) => {
    e.preventDefault();
    prevStep();
  };

  const navigate = useNavigate();

  const navigateToEventPage = async () => {
    setIsCreateEventClicked(false);
    const plan = await addEventAction(eventObj);
    navigate(`/event-page/${plan.id.toString()}`);
  };

  return (
      <>
        <Dialog
          PaperProps={{
            style: {
              minHeight: "45%",
              maxHeight: "70%",
              backgroundColor: "#ffffffd6",
              borderRadius: "10px",
              boxShadow: "3px 3px 13px 6px #00000092",
            },
          }}
          open
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>
            <Grid container justifyContent="space-between" alignItems="center">
              <Typography
                style={{
                  color: "#494d47",
                  fontFamily: "Playfair Display",
                  fontSize: 35,
                }}
              >
                Confirmation
              </Typography>
              <IconButton onClick={closeDialog}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </DialogTitle>
          <AppBar title="Confirm User Data" />
          <Grid >
            <List>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary={<Typography style={{ color: '#54ab29', fontFamily: 'Playfair Display', textDecoration: 'underline', fontSize: 20 }}>Event Name</Typography>} secondary={<Typography style={{ color: 'grey', fontFamily: 'Abel', fontSize:18, fontWeight: 'bold' }}>{eventObj.eventName}</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary={<Typography style={{ color: '#54ab29', fontFamily: 'Playfair Display', textDecoration: 'underline', fontSize: 17 }}>Dates</Typography>} secondary={<Typography style={{ color: 'grey', fontFamily: 'Abel', fontSize: 18 , fontWeight: 'bold'}}>{eventObj.dates}</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary={<Typography style={{ color: '#54ab29', fontFamily: 'Playfair Display', textDecoration: 'underline', fontSize: 17 }}>Event Type</Typography>} secondary={<Typography style={{ color: 'grey', fontFamily: 'Abel', fontSize: 18 , fontWeight: 'bold'}}>{eventObj.eventType}</Typography>} />
              </ListItem>
              <ListItem>
                <ListItemText
                  disableTypography
                  primary={<Typography style={{ color: '#54ab29', fontFamily: 'Playfair Display', textDecoration: 'underline', fontSize: 17 }}>Location</Typography>} secondary={<Typography style={{ color: 'grey', fontFamily: 'Abel', fontSize: 18 , fontWeight: 'bold'}}>{eventObj.location}</Typography>} />
              </ListItem>
            </List>
          </Grid>

          <br />

          <div style={style}>
            <Button
              style={{ height: "40px", width: "100px", backgroundColor: '#8b8b8bce', fontFamily: 'Playfair Display', letterSpacing: '2px' }}
              color="secondary"
              variant="contained"
              onClick={handlePrevButton}>
              Back
            </Button>
            <Button
              color="secondary"
              style={{ height: "40px", width: "120px", backgroundColor: '#98a153ce', fontFamily: 'Playfair Display', letterSpacing: '2px'}}
              variant="contained"
              onClick={navigateToEventPage}
            >Confirm
            </Button>
          </div>
        </Dialog>
      </>
  );
};

export default Confirm;
