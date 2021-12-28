import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
//components
import UploadFolder from "../UploadFolder/UploadFolder";

const AddCategoryModal = ({ openModal, setOpenModal }) => {
  const [categoryName, setCategoryName] = useState({});

  const handleClose = () => {
    setOpenModal(false);
  };

  const postNewCategory = () => {};

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Yeni Kategori Ekle</DialogTitle>
        <DialogContent>
          <UploadFolder />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Categori İsmi (zorunlu Alan)"
            type="title"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button onClick={handleClose}>Kaydet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCategoryModal;
