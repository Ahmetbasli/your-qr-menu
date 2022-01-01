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
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
//components
import UploadFolder from "../UploadFolder/UploadFolder";
import styles from "./AddCategoryModal.module.css";
//axios
import axios from "axios";

const modalStyles = {
  info: {
    display: "flex",
    alignItems: "center",
    justifyContetn: "center",
    fontSize: "15px",
    paddingLeft: "14px",
  },
  textFieldErrMessage: {
    height: "25px",
    color: "#d32f2f",
  },
};

const AddCategoryModal = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState(null);
  const [uploadedImg, setUploadedImg] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
    setCategoryTitle(null);
    setUploadedImg(null);
  };

  const handleTextFieldChange = (e) => {
    setCategoryTitle(() => {
      const value = e.target.value;

      if (value === "") {
        return { value, error: true, errorMessage: "Bu alan boş bırakılamaz" };
      } else if (value.length > 50) {
        return {
          value,
          error: true,
          errorMessage: "50 karakterden uzun ismi girilemez",
        };
      } else {
        return { value, error: false, errorMessage: " " };
      }
    });
  };

  const AddNewCategory = async () => {
    if (!categoryTitle) {
      setCategoryTitle({
        error: true,
        errorMessage: "Bu alan boş bırakılamaz",
      });
      return;
    } else if (categoryTitle.error || uploadedImg?.error) return;

    setIsAddingNewCategory(true);

    const formData = new FormData();
    formData.append("categoryImage", uploadedImg?.value || null);
    formData.append("title", categoryTitle.value);
    try {
      const response = await axios({
        method: "post",
        url: "https://menuhub-backend.herokuapp.com/category/create",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch(addToCategories(response.data));
      setOpenModal(false);
      setIsAddingNewCategory(false);
      setCategoryTitle(null);
      setUploadedImg(null);
    } catch (err) {}
  };

  const sendFileDataToAddCategoryModal = (uploadedFile) => {
    setUploadedImg(uploadedFile);
  };

  const removeImageOnDeleteClicked = () => {
    setUploadedImg(null);
  };

  return (
    <>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Yeni Kategori Ekle</DialogTitle>
        <DialogContent>
          <UploadFolder sendFileData={sendFileDataToAddCategoryModal} />
          <div style={modalStyles.info}>
            <Typography
              gutterBottom
              variant="p"
              align="left"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                margin: "auto 0",
                color: !uploadedImg?.error ? "green" : "#d32f2f",
                height: "25px",
              }}
              component="div"
            >
              {!uploadedImg
                ? ""
                : !uploadedImg.error
                ? uploadedImg.value.name?.substring(0, 30)
                : uploadedImg.errorMessage}
            </Typography>
            {uploadedImg && (
              <IconButton
                onClick={(event) => removeImageOnDeleteClicked(event)}
                aria-label="remove Image On DeleteClicked"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </div>
          <TextField
            error={categoryTitle?.error ? true : false}
            margin="dense"
            id="title"
            label="Categori İsmi (zorunlu Alan)"
            type="title"
            fullWidth
            variant="outlined"
            onChange={(e) => handleTextFieldChange(e)}
            helperText={categoryTitle?.error ? categoryTitle.errorMessage : ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button disabled={isAddingNewCategory} onClick={AddNewCategory}>
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddCategoryModal;
