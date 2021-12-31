import React from "react";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
//styles
import styles from "./AddCategoryCard.module.css";
//fetch
import axios from "axios";
//modal
import AddCategoryModal from "../AddCategoryModal/AddCategoryModal";

const AddCategoryCard = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Card className={styles.card} sx={{ minWidth: 300, minHeight: 100 }}>
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

export default AddCategoryCard;
