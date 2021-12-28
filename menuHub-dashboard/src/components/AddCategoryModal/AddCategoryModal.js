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
//axios
import axios from "axios";

const AddCategoryModal = ({ openModal, setOpenModal }) => {
  const [categoryName, setCategoryName] = useState({ error: false });
  const [uploadedImg, setUploadedImg] = useState({ error: true });

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

  const postNewCategory = async () => {
    //console.log(uploadedImg.name);
    const formData = new FormData();
    formData.append("categoryImage", uploadedImg);
    formData.append("title", categoryName.value);
    try {
      await axios({
        method: "post",
        url: "https://your-qr-menu-backend.herokuapp.com/category/create",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (err) {
      console.log(err);
    }
    setOpenModal(false);
  };

  const senFileDataToAddCategoryModal = (uploadedFile) => {
    setUploadedImg(uploadedFile);
  };

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Yeni Kategori Ekle</DialogTitle>
        <DialogContent>
          <UploadFolder
            senFileDataToAddCategoryModal={senFileDataToAddCategoryModal}
          />
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
          <Button onClick={postNewCategory}>Kaydet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCategoryModal;
