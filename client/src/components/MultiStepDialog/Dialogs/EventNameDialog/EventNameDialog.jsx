import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import './EventNameDialog.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function EventNameDialog({ nextStep, setEventObj, closeDialog  }) {
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
          height: "420px"
        }
      }}
      open
      fullWidth
    >
      <DialogTitle>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography style={{ color: '#9da275ce', fontFamily: 'Playfair Display', fontSize: '35px', fontWeight: "600" }}>Event name</Typography>
          <IconButton onClick={closeDialog}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      <div className='input-container'>
        <input
          className='name-input'
          placeholder="Enter Your Event Name"
          value={input}
          type="text"
          onChange={handleChange} />
      </div>
      <div className='button-container'>
        <Button

        style={{height: "40px" , width: "100px", backgroundColor: '#98a153ce' }}
          className='btn'
          onClick={handleNextButton}>

            <Typography style={{fontFamily: 'Playfair Display', fontSize: '20px', letterSpacing: 2, textTransform: "capitalize"}}>Next</Typography>
                    
        </Button>
      </div>
    </Dialog>
  )
}

export default EventNameDialog