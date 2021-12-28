import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
//components
import UploadFolder from "../UploadFolder/UploadFolder";
import styles from "./AddCategoryModal.module.css";

const AddCategoryModal = ({ openModal, setOpenModal }) => {
  const [categoryName, setCategoryName] = useState({ error: false });

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleTextFieldChange = (e) => {
    setCategoryName(() => {
      const value = e.target.value;

      if (value === "") {
        return { value, error: true };
      } else {
        return { value, error: false };
      }
    });
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
            variant="outlined"
            onChange={(e) => handleTextFieldChange(e)}
          />
          <p className={styles.textFieldErrMessage}>
            {categoryName.error ? "Bu alan boş bırakılamaz" : ""}
          </p>
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
