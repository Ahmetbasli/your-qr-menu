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
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
//components
import UploadFolder from "../UploadFolder/UploadFolder";
import styles from "./AddProductModal.module.css";
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

const AddProductModal = ({
  openModal,
  setOpenModal,
  categoryIdOfProductFeed,
}) => {
  const dispatch = useDispatch();
  const [isAddingNewProduct, setIsAddingNewProduct] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [productTitle, setProductTitle] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [productPrice, setProductPrice] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
    setProductTitle(null);
    setUploadedImg(null);
    setProductDescription(null);
    setProductDescription(null);
  };

  const handleTextFieldChange = (e) => {
    setProductTitle(() => {
      const value = e.target.value;

      if (value === "") {
        return { value, error: true, errorMessage: "Bu alan boş bırakılamaz" };
      } else if (value.length > 50) {
        return {
          value,
          error: true,
          errorMessage: "50 karakterden uzun isim girilemez",
        };
      } else {
        return { value, error: false, errorMessage: " " };
      }
    });
  };
  const AddProductToCurrentCategory = async () => {
    if (!productTitle) {
      setProductTitle({
        error: true,
        errorMessage: "Bu alan boş bırakılamaz",
      });
      return;
    } else if (productTitle.error || uploadedImg?.error) return;

    setIsAddingNewProduct(true);

    // setOpenModal(false);
    const formData = new FormData();
    formData.append("productImage", uploadedImg?.value || null);
    formData.append("title", productTitle.value);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    setUploadedImg(null);
    setProductTitle(null);
    setProductDescription(null);
    setProductPrice(null);

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
      setOpenModal(false);
      setIsAddingNewProduct(false);
    } catch (err) {}
  };

  const sendFileDataToAddProductModal = (uploadedFile) => {
    setUploadedImg(uploadedFile);
  };
  const removeImageOnDeleteClicked = () => {
    setUploadedImg(null);
  };

  return (
    <>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Yeni Ürün Ekle</DialogTitle>
        <DialogContent>
          <UploadFolder sendFileData={sendFileDataToAddProductModal} />
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
                <DeleteIcon fontSize="small" color="error" />
              </IconButton>
            )}
          </div>
          <TextField
            error={productTitle?.error ? true : false}
            autoFocus
            margin="dense"
            id="title"
            label="Ürün İsmi (zorunlu Alan)"
            type="text"
            fullWidth
            variant="outlined"
            onChange={(e) => handleTextFieldChange(e)}
            helperText={productTitle?.error ? productTitle.errorMessage : ""}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button
            disabled={isAddingNewProduct}
            onClick={AddProductToCurrentCategory}
          >
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddProductModal;
