import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import { useLoadScript } from "@react-google-maps/api";
import Map from './Map';
import loading_gif from '../../../../images/loading_gif.gif'

const libraries = ["places"]

const LocationDialog = ({ nextStep, prevStep, setEventObj, closeDialog, style, eventObj }) => {

    const handleNextButton = (e) => {
        e.preventDefault();
        if (eventObj.location === "") {
            alert("Location can not be empty")
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

    if (!isLoaded) return <img alt='loading' src={loading_gif}></img>;
    return (
        <>
            <Dialog
                PaperProps={{
                    style: {
                        minHeight: '58%',
                        maxHeight: '70%',
                        backgroundColor: "#ffffffd6",
                        borderRadius: "10px",
                        boxShadow: "3px 3px 13px 6px #00000092"
                    }
                }}
                open
                fullWidth
                maxWidth='sm'
            >
                <DialogTitle>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Typography style={{ color: '#9da275ce', fontFamily: 'Playfair Display', fontSize: '35px', fontWeight: "600" }}>Choose Location</Typography>
                        <IconButton onClick={closeDialog}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </DialogTitle>
                <Map setEventObj={setEventObj} />
                <div style={style}>
                    <Button
                        style={{ height: "40px", width: "100px", backgroundColor: '#8b8b8bce' }}
                        className='btn'
                        onClick={handlePrevButton}>
                        <Typography style={{ fontFamily: 'Playfair Display', fontSize: '20px', letterSpacing: 2, textTransform: "capitalize" }}>back</Typography>
                    </Button>
                    <Button
                        style={{ height: "40px", width: "100px", backgroundColor: '#98a153ce' }}
                        className='btn'
                        onClick={handleNextButton}>
                        <Typography style={{ fontFamily: 'Playfair Display', fontSize: '20px', letterSpacing: 2, textTransform: "capitalize" }}>Next</Typography>
                    </Button>
                </div>
            </Dialog>
           </>
    );
}



export default LocationDialog