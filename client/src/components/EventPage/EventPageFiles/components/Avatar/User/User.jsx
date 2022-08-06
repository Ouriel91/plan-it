import { Avatar } from "@nextui-org/react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import "./User.css"

const User = ({ user, deleteUserAction }) => {
  const [isDeleteShown, setIsDeleteShown] = useState(false);


  const handleAvatarClick = () => {
    setIsDeleteShown(!isDeleteShown);
  };

  const deleteItem = (e) => {
    setIsDeleteShown(!isDeleteShown);
    deleteUserAction(e.currentTarget.id, user.eventId);
  };

  return (
    <div className="avatars-container">
      <div className="item-div" key={user.id}>
        <Avatar
          className="todo-row"
          key={user.id}
          textColor="white"
          size="xl"
          pointer
          text={user.fullName}
          onClick={handleAvatarClick}
          stacked
          NormalWeights="bold"
          color="success"
        />

        <div className="delete-btn">
          <Dialog open={isDeleteShown} onClose={() => setIsDeleteShown(false)}>
            <DialogTitle>Remove Friend</DialogTitle>
            <DialogContent>Are you sure you want to remove this friend? </DialogContent>
            <DialogActions>
              <Button onClick={handleAvatarClick}>Cancel</Button>
              <Button id={user.id} onClick={deleteItem}>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default User;
