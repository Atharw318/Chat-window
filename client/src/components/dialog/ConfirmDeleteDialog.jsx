import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Delete Confirm</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure, you want to delete this group?
        </DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={deleteHandler} color="error">
            yes
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
