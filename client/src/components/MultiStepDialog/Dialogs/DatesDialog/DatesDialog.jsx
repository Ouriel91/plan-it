import { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@mui/material/TextField';
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import './DatesDialog.css'

function DatePickerDialog({ nextStep, prevStep, setEventObj, closeDialog, style }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleNextButton = (e) => {
    e.preventDefault()
    let accurateDate = String(startDate).split(' ', 5).join(' ')
    setEventObj(prevState => ({ ...prevState, dates: accurateDate }))
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
    >
      <DialogTitle>
        <Grid container justify="space-between" alignItems="center">
          <Typography style={{ color: '#9da275ce', fontFamily: 'Playfair Display', fontSize: '35px' }}>Pick a date</Typography>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} sx={{ mt: 3, ml: 4, mr: 4, mb: 21 }} />}
          label="Pick a date"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
        />
      </LocalizationProvider>
      <div style={style}>
        <Button
          style={{ height: "40px", width: "100px", backgroundColor: '#8b8b8bce', fontFamily: 'Playfair Display', letterSpacing: '2px'  }}
          color="secondary"
          variant="contained"
          onClick={handlePrevButton}>
          Back
        </Button>
        <Button
          color="secondary"
          style={{ height: "40px", width: "100px", backgroundColor: '#98a153ce', fontFamily: 'Playfair Display', letterSpacing: '2px'  }}
          variant="contained"
          onClick={handleNextButton}
        >Next
        </Button>
      </div>
    </Dialog>
  );
}

export default DatePickerDialog