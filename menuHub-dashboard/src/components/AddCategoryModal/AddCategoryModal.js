import React, { useState, useRef } from "react";
//redux
import { useDispatch } from "react-redux";
import { addToCategories } from "../../slices/categorySlice";
//mui
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
  const dispatch = useDispatch();
  const titleRef = useRef();
  const [categoryName, setCategoryName] = useState({ error: false });
  const [uploadedImg, setUploadedImg] = useState({ error: true });

  const handleClose = () => {
    setOpenModal(false);
    setCategoryName((prev) => ({ ...prev, error: false }));
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

  const AddNewCategory = async () => {
    if (!titleRef.current.value) {
      setCategoryName((prev) => ({ ...prev, error: true }));
      return;
    }
    const formData = new FormData();
    formData.append("categoryImage", uploadedImg);
    formData.append("title", categoryName.value);
    try {
      const response = await axios({
        method: "post",
        url: "https://menuhub-backend.herokuapp.com/category/create",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch(addToCategories(response.data));
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
            inputRef={titleRef}
          />
          <p className={styles.textFieldErrMessage}>
            {categoryName.error ? "Bu alan boş bırakılamaz" : ""}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button onClick={AddNewCategory}>Kaydet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCategoryModal;
