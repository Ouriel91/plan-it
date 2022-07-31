import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import "./ConfirmDialog.css";
import { useNavigate } from "react-router-dom";

const Confirm = ({
  nextStep,
  prevStep,
  closeDialog,
  style,
  setIsCreateEventClicked,
  eventObj,
  addEventAction,
  events,
}) => {
  // const handleNextButton = (e) => {
  //     e.preventDefault();
  //     nextStep();

  // };
  
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
    <MuiThemeProvider>
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
          maxWidth="sm"
        >
          <DialogTitle>
            <Grid container justify="space-between" alignItems="center">
              <Typography
                style={{
                  color: "#9da275ce",
                  fontFamily: "Playfair Display",
                  fontSize: "35px",
                }}
              >
                Confirmation
              </Typography>
              <IconButton onClick={closeDialog}>
                <CloseIcon onClick={closeDialog} />
              </IconButton>
            </Grid>
          </DialogTitle>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    style={{
                      color: "#b2b887ce",
                      fontFamily: "Playfair Display",
                      textDecoration: "underline",
                      fontSize: "17px",
                    }}
                  >
                    Event Name
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "grey",
                      fontFamily: "Abel",
                      fontSize: "15px",
                    }}
                  >
                    {eventObj.eventName}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    style={{
                      color: "#b2b887ce",
                      fontFamily: "Playfair Display",
                      textDecoration: "underline",
                      fontSize: "17px",
                    }}
                  >
                    Dates
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "grey",
                      fontFamily: "Abel",
                      fontSize: "15px",
                    }}
                  >
                    {eventObj.dates}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    style={{
                      color: "#b2b887ce",
                      fontFamily: "Playfair Display",
                      textDecoration: "underline",
                      fontSize: "17px",
                    }}
                  >
                    Event Type
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "grey",
                      fontFamily: "Abel",
                      fontSize: "15px",
                    }}
                  >
                    {eventObj.eventType}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    style={{
                      color: "#b2b887ce",
                      fontFamily: "Playfair Display",
                      textDecoration: "underline",
                      fontSize: "17px",
                    }}
                  >
                    Location
                  </Typography>
                }
                secondary={
                  <Typography
                    style={{
                      color: "grey",
                      fontFamily: "Abel",
                      fontSize: "15px",
                    }}
                  >
                    {eventObj.location}
                  </Typography>
                }
              />
            </ListItem>
          </List>
          <br />

          <div style={style}>
            <Button
              style={{
                height: "40px",
                width: "100px",
                backgroundColor: "#8b8b8bce",
                fontFamily: "Playfair Display",
                letterSpacing: "2px",
              }}
              color="secondary"
              variant="contained"
              onClick={handlePrevButton}
            >
              Back
            </Button>
            <Button
              color="secondary"
              style={{
                height: "40px",
                width: "100px",
                backgroundColor: "#98a153ce",
                fontFamily: "Playfair Display",
                letterSpacing: "2px",
              }}
              variant="contained"
              onClick={navigateToEventPage}
            >
              Confirm
            </Button>
          </div>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default Confirm;
