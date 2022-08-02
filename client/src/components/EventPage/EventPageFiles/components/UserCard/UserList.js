import React, { useState, useEffect } from "react";
import "./userList.css";
import { deepOrange, deepPurple } from '@mui/material/colors';
// import Avatar from '@mui/material/Avatar';
import Avatar from "react-avatar";
import AvatarGroup from '@mui/material/AvatarGroup';
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
  

  const handleClick = (event) => {
    
    setIsShown((current) => !current);

    
    // setIsShown(true);
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
          
          {isShown && 
            
            <input
              type="text"
              placeholder="Enter Full User Name..."
              className="form-control"
              value={data}
              onChange={(event) => {
                setData(event.target.value);
                
              }
              }
            />
            
          }
            { toggleButton ? (
            <button className="far fa-edit add-btn" onClick={addItem}>Edit</button>
              
            ) : (
            <button className="far fa-plus add-btn" onClick={addItem}>Add</button>
              
            )}
          
            {/* todo-row */}
          </div>
          <div className="">
            {items.map((curElem) => {
              return (
                
                <div className="item-div" key={curElem.id}>
                <span>
                <Stack direction="row" spacing={-1}>
                
                     <Avatar
                        round={true} 
                      size="30px"
                      color={Avatar.getRandomColor("sitebase", [
                        "red",
                        "green",
                        "blue"
                      ])}
                      name={curElem.name}
                    />
                      </Stack>
                      </span>  
      

                  {/* <div className="delete-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(curElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div> */}
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove all"
              onClick={removeAll}
            >
              <span>USER LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
