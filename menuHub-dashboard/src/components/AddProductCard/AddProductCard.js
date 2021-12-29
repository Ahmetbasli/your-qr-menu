import React from "react";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
//styles
import styles from "./AddProductCard.module.css";
//fetch
import axios from "axios";
//modal
import AddCategoryModal from "../AddCategoryModal/AddCategoryModal";

const AddProductCard = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const addNewCategory = async () => {
    console.log("akfjsa");
    try {
      console.log("staet to post");
      await axios.post(`${process.env.SERVICE_ORIGIN}/category/create`, {
        title: "Kebablar",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card className={styles.card} sx={{ minWidth: 300, minHeight: 400 }}>
        <Fab
          onClick={handleClickOpen}
          color="secondary"
          size="large"
          variant="extended"
          aria-label="add"
        >
          <AddIcon sx={{ mr: 1 }} />
          Yeni Kategori Ekle
        </Fab>
      </Card>
      <AddCategoryModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default AddProductCard;
