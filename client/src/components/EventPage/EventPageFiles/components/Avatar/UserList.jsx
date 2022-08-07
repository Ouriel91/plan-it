import React, { useState } from "react";
import "./userList.css";
import emailjs from "emailjs-com";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UserConnector from "./User/UserConnector";

const App = ({ addUserAction, eventId, users }) => {
  const [data, setData] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [email, setEmail] = useState("");
  const [eventIdUrl,setEventIdUrl] = useState(eventId.toString())
  const [initials, setInitials] = useState("");

  const handleClickAdd = () => {
    addUserAction(data, email, eventId);
    setData("");
    setEmail("");
    setEventIdUrl("")
    setIsShown(!isShown);
    console.log(eventId);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h7okkuk",
        "template_qf4dk09",
        e.target,
        "zmx11m5tKMK8u3SeQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div className="addItems">
            <Dialog open={isShown} onClose={() => setIsShown(false)}>
              <DialogTitle style={{fontSize: "20px", fontFamily: "Abel", marginTop: "5px"}} className="dialog-space">Add New User
              <IconButton onClick={() => setIsShown(false)}>
            <CloseIcon />
          </IconButton>
              </DialogTitle>
              <DialogContent>
                <form onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Enter Full User Name..."
                    className="form-control"
                    name="name"
                    value={data}
                    onChange={(event) => {
                      setData(event.target.value);
                    }}
                  />

                  <input
                    onSubmit={sendEmail}
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="user_email"
                    onChange={(event) => setEmail(event.target.value)}
                    
                  />
                  <div>
                    <input name ="event-page"
                    className="my_content_container"
                     value={eventId.toString()}
                      onSubmit={sendEmail}
                      onChange={(event) => setEventIdUrl(event.target.value)}></input>
                  </div>
                  <div>
                    <input
                      onClick={handleClickAdd}
                      type="submit"
                      className="btn btn-info"
                      name ="event-page"
                      value="ADD"
                    ></input>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {users.map((user) => (
            <UserConnector key={user.id} user={user}  />
          ))}
          <button onClick={() => setIsShown(true)} className="my-button">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
