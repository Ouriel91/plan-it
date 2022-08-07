import { useState } from "react";
import FormControl from "@mui/material/FormControl";
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
          <Typography style={{ color: '#9da275ce', fontFamily: 'Playfair Display', fontSize: '35px', fontWeight: "600" }}>Choose event type</Typography>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <div>
        <FormControl sx={{ m: 2, ml: 11, mt: 5, mb: 20, width: "70%" }}>
          <Select
            sx={{ outline: "3px outset #98a153ce", border: "none", borderRadius: "8px",boxShadow: "1px 8px 24px 3px rgba(0, 0, 0, 0.2)", fontFamily: "Abel" }}
            value={type}
            onChange={handleChange}
            autoWidth
            size="big">
              <Typography style={{fontFamily: "Abel", fontSize: "18px"}}></Typography>
              <MenuItem value={"Pool party"}>
                <Typography style={{fontFamily: "Abel", fontSize: "18px"}} >Pool party</Typography>
              </MenuItem>
              <MenuItem value={"BBQ with friends"}>
                <Typography style={{fontFamily: "Abel", fontSize: "18px"}} >BBQ with friends</Typography>
              </MenuItem>
              <MenuItem value={"Party"}>
                <Typography style={{fontFamily: "Abel", fontSize: "18px"}} >Party</Typography>
              </MenuItem>
              <MenuItem value={"Camping"}>
                <Typography style={{fontFamily: "Abel", fontSize: "18px"}} >Camping</Typography> 
              </MenuItem>
              <MenuItem value={"Other"}>
                <Typography style={{fontFamily: "Abel"}} variant={'h5'}>Other</Typography>  
              </MenuItem>
          </Select>
        </FormControl>
      </div>


      <div style={style}>
      <Button
        style={{height: "40px" , width: "100px", backgroundColor: '#8b8b8bce' }}
          className='btn'
          onClick={handlePrevButton}>
            <Typography style={{fontFamily: 'Playfair Display', fontSize: '20px', letterSpacing: 2, textTransform: "capitalize" }}>back</Typography>
        </Button>
        <Button
        style={{height: "40px" , width: "100px", backgroundColor: '#98a153ce' }}
          className='btn'
          onClick={handleNextButton}>
            <Typography style={{fontFamily: 'Playfair Display', fontSize: '20px', letterSpacing: 2, textTransform: "capitalize" }}>Next</Typography>
        </Button>
      </div>
    </Dialog>
  );
}

export default EventTypeDialog
