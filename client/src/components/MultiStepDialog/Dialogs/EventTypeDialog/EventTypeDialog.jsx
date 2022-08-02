import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";

const EventTypeDialog = ({ nextStep, prevStep, setEventObj, closeDialog, style }) => {
  const [type, setType] = useState('');

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleNextButton = (e) => {
    e.preventDefault()
    if (type === '') {
      alert('Please select a type')
      return;
    }
    setEventObj(prevState => ({ ...prevState, eventType: type }))
    nextStep()
  }

  const handlePrevButton = (e) => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Dialog
      PaperProps={{
        style: {
          minHeight: '45%',
          maxHeight: '70%',
          backgroundColor: "#ffffffd6",
          borderRadius: "10px",
          boxShadow: "3px 3px 13px 6px #00000092"
        }
      }}
      open
      fullWidth
      maxWidth='sm'
      disableEnforceFocus
    >
      <DialogTitle>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* <img src={app_logo} alt="logo" height={100} width={100}></img> */}
          <Typography style={{ color: '#9da275ce', fontFamily: 'Playfair Display', fontSize: '35px' }}>Choose Event type</Typography>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <div>
        <FormControl sx={{ m: 1, mb: 20, width: "70%" }}>
          <InputLabel id="demo-simple-select-required-label">
            <Typography variant="h7">Type</Typography>
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={type}
            onChange={handleChange}
            autoWidth
            label="Type"
            color="success"
            size="big"
          >
              <MenuItem value={"Pool party"}>
                <Typography variant={'h5'}>pool party</Typography>
              </MenuItem>
              <MenuItem value={"BBQ with friends"}>
                <Typography variant={'h5'}>BBQ with friends</Typography>
              </MenuItem>
              <MenuItem value={"Party"}>
                <Typography variant={'h5'}>Party</Typography>
              </MenuItem>
              <MenuItem value={"Camping"}>
                <Typography variant={'h5'}>Camping</Typography> 
              </MenuItem>
              <MenuItem value={"Other"}>
                <Typography variant={'h5'}>Other</Typography>  
              </MenuItem>
          </Select>
        </FormControl>
      </div>


      <div style={style}>
        <Button
          style={{ height: "40px", width: "100px", backgroundColor: '#8b8b8bce',fontSize: "16px", fontFamily: 'Playfair Display', letterSpacing: '2px'  }}
          color="secondary"
          variant="contained"
          onClick={handlePrevButton}>
          Back
        </Button>
        <Button
          color="secondary"
          style={{ height: "40px", width: "100px", backgroundColor: '#98a153ce', fontSize: "16px", fontFamily: 'Playfair Display', letterSpacing: '2px'  }}
          variant="contained"
          onClick={handleNextButton}
        >Next
        </Button>
      </div>
    </Dialog>
  );
}

export default EventTypeDialog
