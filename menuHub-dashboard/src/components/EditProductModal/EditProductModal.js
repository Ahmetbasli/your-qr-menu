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
//components
import UploadFolder from "../UploadFolder/UploadFolder";
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
  uploadMessage: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    margin: "auto 0",

    height: "25px",
  },
};

const EditProductModal = ({ openModal, setOpenModal, id }) => {
  const dispatch = useDispatch();
  const [isCurrentProductUpdating, setIsCurrentProductUpdating] =
    useState(false);
  const [currentPorduct, setCurrentProduct] = useState(null);
  const [productTitle, setProductTitle] = useState(null);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://menuhub-backend.herokuapp.com/product/${id}`
        );
        const resOfCurrentProduct = res.data;
        setCurrentProduct(resOfCurrentProduct);
        setProductTitle({
          value: resOfCurrentProduct.title,
          error: false,
        });

        setUploadedImg({
          value: {
            name: resOfCurrentProduct.productImageOriginalName,
          },
          error: false,
          errorMessage: "",
        });

        setProductDescription(resOfCurrentProduct.productDescription);

        setProductPrice(resOfCurrentProduct.productPrice);
      } catch (err) {}
    })();
  }, []);

  const handleClose = () => {
    setOpenModal(false);

    setProductTitle({
      value: currentPorduct.title,
      error: false,
    });
    setUploadedImg({
      value: {
        name: currentPorduct.categoryImageOriginalName,
      },
      error: false,
      errorMessage: "",
    });
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
  const updateCurrentProduct = async () => {
    if (productTitle.error || uploadedImg?.error) return;

    setIsCurrentProductUpdating(true);

    const formData = new FormData();
    if (uploadedImg === null) {
      // if user delete img
      formData.append("productImage", null);
    } else if (uploadedImg.value.size) {
      formData.append("productImage", uploadedImg.value);
    }
    formData.append("title", productTitle.value);
    formData.append("description", productDescription);
    formData.append("price", productPrice);

    try {
      const postUrl = `https://menuhub-backend.herokuapp.com/product/update/${id}`;
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
      setOpenModal(false);
      setIsCurrentProductUpdating(false);
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
                ...modalStyles.uploadMessage,
                color: !uploadedImg?.error ? "green" : "#d32f2f",
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
                <DeleteIcon fontSize="small" color="error" />
              </IconButton>
            )}
          </div>
          <TextField
            error={productTitle?.error ? true : false}
            autoFocus
            margin="dense"
            id="title"
            label="Categori İsmi (zorunlu Alan)"
            type="title"
            fullWidth
            variant="outlined"
            value={productTitle?.value}
            helperText={productTitle?.error ? productTitle?.errorMessage : ""}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Vazgeç</Button>
          <Button
            disabled={isCurrentProductUpdating}
            onClick={updateCurrentProduct}
          >
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditProductModal;
