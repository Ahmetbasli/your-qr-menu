import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import EditProductModal from "../EditProductModal/EditProductModal";
const EditIconOfProductCard = ({ id, categoryIdOfProductFeed }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpenModal(true)}
        aria-label="add to favorites"
      >
        <EditIcon />
      </IconButton>
      <EditProductModal
        id={id}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default EditIconOfProductCard;
