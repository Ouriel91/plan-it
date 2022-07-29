import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import { useLoadScript} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import Map from './Map';

const libraries = ["places"]

const LocationDialog = ({nextStep, prevStep, setEventObj, closeDialog, style, eventObj}) => {

    const handleNextButton = (e) => {
        e.preventDefault();
        if(eventObj.location === ""){
            alert("place can not be empty!!")
            return
        }
        nextStep();
    };

    const handlePrevButton = (e) => {
        e.preventDefault();
        prevStep();
    }  

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    if (!isLoaded) return <div>Loading...</div>;
    return ( 
    <>
        <MuiThemeProvider>
            <Dialog
            open
            fullWidth
            maxWidth='sm'
            >
                <DialogTitle>
                    <Grid container justify="space-between" alignItems="center">
                    <Typography variant="div">Choose Location</Typography>
                    <IconButton onClick={closeDialog}>
                        <CloseIcon />
                    </IconButton>
                    </Grid>
                </DialogTitle>
                <Map setEventObj={setEventObj}/>
                <div style={style}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={handlePrevButton}
                    >Back</Button>

                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleNextButton}
                    >Continue</Button>
                </div>
            </Dialog>
        </MuiThemeProvider>
    </>
  );
}



export default LocationDialog