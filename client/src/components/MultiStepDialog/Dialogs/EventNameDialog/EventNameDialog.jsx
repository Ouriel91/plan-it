import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import  TextField  from '@mui/material/TextField';
import CloseIcon from "@material-ui/icons/Close";

function EventNameDialog({nextStep, setEventObj, closeDialog}) {
    const [input,setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleNextButton = (e) => {
        e.preventDefault()

        if(input === '') {
          alert('Event can not be empty')
          return
        }
        setEventObj(prevState => ({...prevState, eventName: input}))
        nextStep()
    }

  return (
        <Dialog
          PaperProps={{ style: {
          minHeight: '70%',
          maxHeight: '70%',
          mb:40
        }}}
          open
          fullWidth
          minHeight = '80vh'
          maxWidth='sm'
        >
          <DialogTitle>
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h2">Event name</Typography>
              <IconButton onClick={closeDialog}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </DialogTitle>
          <TextField 
            sx={{ m:2,mb: 16}}
            id="outlined-basic" label="Event Name" variant="outlined" 
            placeholder="Enter Your Event Name"
            color="secondary"
            focused
            value={input}
            type = "text"
            onChange={handleChange}
            required
          />
          <br />
          
          <Button
            color="secondary"
            style={{height:'60px' , }}
            sx={{ mt: 10 }} 
            variant="contained"
            onClick={handleNextButton}
          >Next
          </Button>
        </Dialog>
  )
}

export default EventNameDialog