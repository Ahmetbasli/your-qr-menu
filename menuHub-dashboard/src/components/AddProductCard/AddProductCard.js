import React from "react";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
//styles
import styles from "./AddProductCard.module.css";
//fetch
import axios from "axios";
//modal
import AddProductModal from "../AddProductModal/AddProductModal";

const AddProductCard = ({ categoryIdOfProductFeed }) => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Card
        className={styles.card}
        sx={{ minWidth: 300, minHeight: 100, border: "1px dashed #f7906c" }}
      >
        <Fab
          onClick={handleClickOpen}
          style={{
            background: "#f7906c",
            color: "black",
          }}
          color="secondary"
          size="large"
          variant="extended"
          aria-label="add"
        >
          <AddIcon sx={{ mr: 1 }} />
          Yeni Ürün Ekle
        </Fab>
      </Card>
      <AddProductModal
        openModal={openModal}
        categoryIdOfProductFeed={categoryIdOfProductFeed}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default AddProductCard;
