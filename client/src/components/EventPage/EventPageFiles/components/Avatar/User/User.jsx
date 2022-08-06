import { Avatar } from "@nextui-org/react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

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
          NormalWeights="black"
          bordered
          color="primary"
        />

        <div className="delete-btn">
          <Dialog open={isDeleteShown} onClose={() => setIsDeleteShown(false)}>
            <DialogTitle>Delete</DialogTitle>
            <DialogContent>Sure? </DialogContent>
            <DialogActions>
              <Button id={user.id} onClick={deleteItem}>
                Yes
              </Button>

              <Button onClick={handleAvatarClick}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default User;
