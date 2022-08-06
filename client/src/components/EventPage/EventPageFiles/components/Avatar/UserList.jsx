import React, { useState } from "react";
import "./userList.css";
import emailjs from "emailjs-com";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import Button from "@mui/material/Button";
import CloseIcon from "@material-ui/icons/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UserConnector from "./User/UserConnector";

const App = ({ addUserAction, eventId, users }) => {
  const [data, setData] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [email, setEmail] = useState("");
  const [initials, setInitials] = useState("");




  const handleClickAdd = () => {
    addUserAction(data, email, eventId);
    setData("");
    setEmail("");
    setIsShown(!isShown);
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
              <DialogTitle>Add New User
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
                  {/* <div>
                    <input name="reply_to"></input>
                  </div> */}
                  <div className="add-btn-margin">
                    <button
                      onClick={handleClickAdd}
                      type="submit"
                      className="btn btn-info"
                    >ADD</button>
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
