import React, { useState, useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
//mui
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectCategories } from "../../slices/categorySlice";
//components
import UploadFolder from "../UploadFolder/UploadFolder";
import styles from "./EditCategoryModal.module.css";
//axios
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { addMultipleToCategories } from "../../slices/categorySlice";
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

const EditCategoryModal = ({ openModal, setOpenModal, id }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currentCategory = categories.find((category) => category._id === id);
  const [isCurrentCategoryUpdating, setIsCurrentCategoryUpdating] =
    useState(false);
  const [categoryTitle, setCategoryTitle] = useState({
    value: currentCategory.title,
    error: false,
  });
  const [uploadedImg, setUploadedImg] = useState({
    value: {
      name: currentCategory.categoryImageOriginalName,
    },
    error: false,
    errorMessage: "",
  });
  const handleClose = () => {
    setOpenModal(false);

    setCategoryTitle({
      value: currentCategory.title,
      error: false,
    });
    setUploadedImg({
      value: {
        name: currentCategory.categoryImageOriginalName,
      },
      error: false,
      errorMessage: "",
    });
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
          errorMessage: "50 karakterden uzun kategori ismi girilemez",
        };
      } else {
        return { value, error: false, errorMessage: " " };
      }
    });
  };

  const sendFileData = (uploadedFile) => {
    setUploadedImg(uploadedFile);
  };

  const updateCurrentCategory = async () => {
    if (categoryTitle.error || uploadedImg?.error) return;

    if (currentCategory.categoryImageOriginalName === uploadedImg?.value.name) {
      setOpenModal(false);
      return;
    }

    setIsCurrentCategoryUpdating(true);

    const formData = new FormData();
    if (uploadedImg === null) {
      // if user remove img
      formData.append("categoryImage", uploadedImg);
    } else if (uploadedImg.value.size) {
      formData.append("categoryImage", uploadedImg.value);
    }

    formData.append("title", categoryTitle.value);

    try {
      const postUrl = `https://menuhub-backend.herokuapp.com/category/update/${id}`;
      const response = await axios({
        method: "put",
        url: postUrl,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const resOfCategories = await axios.get(
        `https://menuhub-backend.herokuapp.com/category/all`
      );
      dispatch(addMultipleToCategories(resOfCategories.data));
      setIsCurrentCategoryUpdating(false);
      setOpenModal(false);
    } catch (err) {}
  };

  const removeImageOnDeleteClicked = () => {
    setUploadedImg(null);
  };

  return (
    <>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Kategoriyi Düzenle</DialogTitle>
        <DialogContent>
          <UploadFolder sendFileData={sendFileData} />
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
            {uploadedImg?.value?.name && (
              <IconButton
                onClick={(event) => removeImageOnDeleteClicked(event)}
                aria-label="remove Image On DeleteClicked"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </div>
          <TextField
            error={categoryTitle.error ? true : false}
            autoFocus
            margin="dense"
            id="title"
            label="Categori İsmi (zorunlu Alan)"
            type="title"
            fullWidth
            variant="outlined"
            value={categoryTitle.value}
            helperText={categoryTitle.error ? categoryTitle.errorMessage : ""}
            onChange={(e) => handleTextFieldChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button
            disabled={isCurrentCategoryUpdating}
            onClick={updateCurrentCategory}
          >
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditCategoryModal;
