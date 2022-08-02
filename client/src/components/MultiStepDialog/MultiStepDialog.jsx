import EventNameDialog from "./Dialogs/EventNameDialog/EventNameDialog";
import DatesDialog from "./Dialogs/DatesDialog/DatesDialog";
import EventTypeDialog from "./Dialogs/EventTypeDialog/EventTypeDialog";
import LocationDialog from "./Dialogs/LocationDialog/LocationDialog";
import ConfirmDialogConnector from "./Dialogs/ConfirmDialog/ConfirmDialogConnector";


import { useState } from "react";

const MultiStepDialog = ({setIsCreateEventClicked}) => {
  
  const [step, setStep] = useState(1);
  const [eventObj, setEventObj] = useState({
    eventName: "",
    dates: "",
    eventType: "",
    location: "",
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  const closeDialog = () => {
    setIsCreateEventClicked(false);
  }

  const style = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding:'20px',
    fontSize: '20px',
  }

  switch (step) {
    case 1:
      return (
        <EventNameDialog
          nextStep={nextStep}
          setEventObj={setEventObj}
          closeDialog={closeDialog}
        />
      );
     case 2:
      return (
        <DatesDialog
          nextStep={nextStep}
          prevStep={prevStep}
          setEventObj={setEventObj}
          closeDialog={closeDialog}
          style={style}
        />
      );
    case 3:
      return (
        <EventTypeDialog
          nextStep={nextStep}
          prevStep={prevStep}
          setEventObj={setEventObj}
          closeDialog={closeDialog}
          style={style}
        />
      ); 
    case 4:
      return (
        <LocationDialog
          nextStep={nextStep}
          prevStep={prevStep}
          setEventObj={setEventObj}
          closeDialog={closeDialog}
          style={style}
          eventObj={eventObj}
        />
      )

      case 5: return (
        <ConfirmDialogConnector
          prevStep={prevStep}
          closeDialog={closeDialog}
          style={style}
          eventObj={eventObj}
          setIsCreateEventClicked={setIsCreateEventClicked}
        />
      )
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default MultiStepDialog;
