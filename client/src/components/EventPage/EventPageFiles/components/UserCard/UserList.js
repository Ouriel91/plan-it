import React, { useState, useEffect } from "react";
import "./userList.css";
import { Avatar, Grid } from "@nextui-org/react";
import Dialog from "@material-ui/core/Dialog";
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';


const getLocalData = () => {
  const lists = localStorage.getItem("UsersList");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const UserList = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [counter, setCounter] = useState(0);
  const [avatarName, setAvatarName] = useState("");
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [color, setColor] = useState(['default',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'gradient']);




  const handleClick = (event) => {
    setIsShown(!isShown);

  };
  const handleClickAdd = () => {
    addItem();
    setIsShown(!isShown);
  }

  const addItem = () => {
    if (!data) {
      alert("Enter new User Name");
    } else if (data && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: data };
          }
          setAvatarName(...data);
          setCounter(counter + 1);
          return curElem;
        })
      );

      setData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        name: data
      };
      console.log(data);

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
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });

    setItems(updatedItem);
  };

  const removeAll = (index) => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("UsersList", JSON.stringify(items));
  }, [items]);




  return (
    <>
      <div className="main-div">
        <div className="child-div">
        <button onClick={handleClick} className="fa fa-plus add-btn"></button>
          <div className="addItems">
            <Dialog open={isShown} onClose={handleClick}>
              <DialogTitle>Add New User</DialogTitle>
              <DialogContent>
                <input
                  type="text"
                  placeholder="Enter Full User Name..."
                  className="form-control"
                  value={data}
                  onChange={(event) => {
                    setData(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter Email..."
                  className="form-control"
                //   value={...data}
                //   onChange={(event) => {
                //     setData(event.target.value);}}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClick}>Cancel</Button>
                <Button onClick={handleClickAdd}>Add</Button>
              </DialogActions>
            </Dialog>



            {toggleButton ? (
              <button className="far fa-edit add-btn" onClick={addItem}></button>

            ) : (
              <button className="far fa-plus add-btn" onClick={addItem}></button>

            )}

            {/* todo-row */}
          </div>
          <div className="avatars-container">
            {items.map((curElem) => {
              return (

                <div className="item-div" key={curElem.id}>

                  <Grid.Container gap={1}>
                    <Grid xs={12}>
                      <Avatar.Group>
                        <Avatar
                          className="todo-row"
                          key={curElem.id}
                          textColor="white"
                          size="xl"
                          pointer
                          text={curElem.name}
                          stacked
                          NormalWeights='black'
                          bordered
                          color={
                            color[Math.floor(Math.random() * color.length)]
                          }

                        />
                      </Avatar.Group>
                    </Grid>
                    <Grid xs={12}></Grid>
                  </Grid.Container>


                  <div className="delete-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {toggleButton ? <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove all"
              onClick={removeAll}
            >
              <span>USER LIST</span>
            </button>
          </div> : <></>}

        </div>
      </div>
    </>
  );
};

export default UserList;
