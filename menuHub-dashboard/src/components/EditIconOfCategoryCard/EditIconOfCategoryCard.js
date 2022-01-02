import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import EditCategoryModal from "../EditCategoryModal/EditCategoryModal";
const EditIconofCategoryCard = ({ id }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpenModal(true)}
        aria-label="add to favorites"
      >
        <EditIcon style={{ fontSize: "18px" }} />
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
