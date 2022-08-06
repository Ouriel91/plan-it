import React, { useState, useEffect } from "react";
import "./userList.css";
import emailjs from "emailjs-com";
import { Avatar, Grid } from "@nextui-org/react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const getLocalData = () => {
  const lists = localStorage.getItem("UsersList");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const App = ({ lists }) => {
  const [data, setData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [counter, setCounter] = useState(0);
  const [avatarName, setAvatarName] = useState("");
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isDeleteShown, setIsDeleteShown] = useState(false);
  const [show, setShow] = useState(false);

  const [color, setColor] = useState([
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "gradient",
    "orange",
    "green"
  ]);

  const handleShow = () => setShow(true);
  const handleClick = (event) => {
    setIsShown(!isShown);
  };
  const handleAvatarClick = () => {
    setIsDeleteShown(!isDeleteShown);
  };
  const handleClickAdd = () => {
    addItem();
    setIsShown(!isShown);
  };
  const addItem = () => {
    if (!data) {
      alert("Enter new User Name");
    } else if (data && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: data };
          }

          setColor(...color);

          setAvatarName(...data);
          setCounter(counter + 1);
          return curElem;
        })
      );
      setColor();
      setData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        name: data,
        colors: color[Math.floor(Math.random() * color.length)]
      };
      console.log(newData);
      setItems([...items, newData]);
      setData("");
    }
  };

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  const deleteItem = (index) => {
    setIsDeleteShown(!isDeleteShown);
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });

    setItems(updatedItem);
  };

  const removeAll = (index) => {
    setItems([]);
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

  useEffect(() => {
    localStorage.setItem("UsersList", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div className="addItems">
            <Dialog open={isShown} onClose={handleClick}>
              <DialogTitle>
              <Grid container justifyContent="space-between">
          Add New User
          <IconButton onClick={handleClick}>
            <CloseIcon/>
          </IconButton>
        </Grid>
              </DialogTitle>
              <DialogContent>
                <form onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Enter Full User Name"
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
                    // onChange={event => setEmail(event.target.value)}
                  />
                  <div>
                    <input name="reply_to"></input>
                  </div>
                  <div>
                    <button
                      onClick={handleClickAdd}
                      type="submit"
                      className="btn btn-info"
                      style={{width: "1050px"}}
                    >ADD</button>
                  </div>
                </form>
              </DialogContent>

            </Dialog>

            {toggleButton ? (
              <button
                className="far fa-edit add-btn"
                onClick={addItem}
              ></button>
            ) : (
              <button
                className="far fa-plus add-btn"
                onClick={addItem}
              ></button>
            )}

            {/* todo-row */}
          </div>

          <div className="avatars-container">
            {items.map((curElem) => {
              return (
                <div className="item-div" key={curElem.id}>
                  <Avatar
                    className="todo-row"
                    key={curElem.id}
                    textColor="white"
                    size="xl"
                    pointer
                    text={curElem.name}
                    onClick={handleAvatarClick}
                    stacked
                    NormalWeights="black"
                    bordered
                    color={curElem.colors}
                  />

                  <div className="delete-btn">
                    {/* <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt "
                      onClick={() => deleteItem(curElem.id)}
                    ></i> */}
                    <Dialog open={isDeleteShown} onClose={handleClick}>
                      <DialogTitle>Remove friend</DialogTitle>
                      <DialogContent>Are you sure you want to remove this friend? </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={() => deleteItem(curElem.id)}
                        >
                          Yes
                        </Button>
                        
                        <Button onClick={handleAvatarClick}>Cancel</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              );
            })}
          </div>

          {toggleButton ? (
            <div className="showItems">
              <button
                className="btn remove-all-btn"
                data-sm-link-text="Remove all"
                onClick={removeAll}
              >
                <span>USER LIST</span>
              </button>
            </div>
          ) : (
            <></>
          )}
          <button onClick={handleClick} className="my-button">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
