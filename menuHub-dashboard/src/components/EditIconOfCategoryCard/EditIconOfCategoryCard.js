import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { addMultipleToCategories } from "../../slices/categorySlice";
import { useDispatch } from "react-redux";
import EditCategoryModal from "../EditCategoryModal/EditCategoryModal";
const EditIconofCategoryCard = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);

  const editCardOnEditClicked = () => {};

  return (
    <>
      <IconButton
        onClick={() => setOpenModal(true)}
        aria-label="add to favorites"
      >
        <EditIcon />
      </IconButton>
      <EditCategoryModal
        id={id}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default EditIconofCategoryCard;
