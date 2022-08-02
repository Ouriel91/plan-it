import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import  Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
import CloseIcon from "@material-ui/icons/Close";

function EventNameDialog({ nextStep, setEventObj, closeDialog, style2 }) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleNextButton = (e) => {
    e.preventDefault()

    if (input === '') {
      alert('Event can not be empty')
      return
    }
    setEventObj(prevState => ({ ...prevState, eventName: input }))
    nextStep()
  }

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "#ffffffd6",
          borderRadius: "10px",
          boxShadow: "3px 3px 13px 6px #00000092",
        }
      }}
      open
      fullWidth
    >
      <DialogTitle>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography style={{ color: '#9da275ce', fontFamily: 'Playfair Display', fontSize: '35px' }}>Event name</Typography>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <TextField
        sx={{ mt: 3, ml: 4, mr: 4, mb: 21}}
        id="outlined-basic"
        label={
          <Typography variant="h7"> Event Name </Typography>
        }
        placeholder="Enter Your Event Name"
        color="primary"
        inputProps={{style: {fontSize: 20}}}
        focused
        value={input}
        type="text"
        onChange={handleChange}
        required
      />

      <Grid container justifyContent="flex-end" direction='row' item md={11}>
          <Button
            color="secondary"
            style={{ height: "40px" , width: "100px", backgroundColor: '#98a153ce', fontSize: "16px" ,fontFamily: 'Playfair Display', letterSpacing: '2px' }}
            variant="contained"
            onClick={handleNextButton}
          >Next
          </Button>
      </Grid>
    </Dialog>
  )
}

export default EventNameDialog