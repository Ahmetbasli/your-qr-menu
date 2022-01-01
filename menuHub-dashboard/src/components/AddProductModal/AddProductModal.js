import React, { useState, useRef } from "react";
//redux
import { useDispatch } from "react-redux";
import { addMultipleToCategories } from "../../slices/categorySlice";
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
import styles from "./AddProductModal.module.css";
//axios
import axios from "axios";

const AddProductModal = ({
  openModal,
  setOpenModal,
  categoryIdOfProductFeed,
}) => {
  const dispatch = useDispatch();

  const [uploadedImg, setUploadedImg] = useState({ error: true });
  const [productTitle, setProductTitle] = useState({ error: false });
  const [productDescription, setProductDescription] = useState();
  const [productPrice, setProductPrice] = useState();

  const handleClose = () => {
    setOpenModal(false);
    setProductTitle((prev) => ({ ...prev, error: false }));
  };

  const handleTextFieldChange = (e) => {
    setProductTitle(() => {
      const value = e.target.value;

      if (value === "") {
        return { value, error: true };
      } else {
        return { value, error: false };
      }
    });
  };
  const AddProductToCurrentCategory = async () => {
    setOpenModal(false);
    console.log(productTitle);
    const formData = new FormData();
    formData.append("productImage", uploadedImg);
    formData.append("title", productTitle.value);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    try {
      const postUrl = `https://menuhub-backend.herokuapp.com/product/create/${categoryIdOfProductFeed}`;
      const response = await axios({
        method: "post",
        url: postUrl,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      const resOfCategories = await axios.get(
        `https://menuhub-backend.herokuapp.com/category/all`
      );
      dispatch(addMultipleToCategories(resOfCategories.data));
    } catch (err) {}
  };

  const sendFileDataToAddProductModal = (uploadedFile) => {
    setUploadedImg(uploadedFile);
  };
  const sendFileData = "ahmet";
  return (
    <>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Yeni Ürün Ekle</DialogTitle>
        <DialogContent>
          <UploadFolder sendFileData={sendFileDataToAddProductModal} />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Ürün İsmi (zorunlu Alan)"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => handleTextFieldChange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Ürün açıklaması"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Fiyat"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <p className={styles.textFieldErrMessage}>
            {productTitle.error ? "Bu alan boş bırakılamaz" : ""}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button onClick={AddProductToCurrentCategory}>Kaydet</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddProductModal;
