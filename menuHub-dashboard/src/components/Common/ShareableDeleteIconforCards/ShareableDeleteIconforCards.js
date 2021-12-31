import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { addMultipleToCategories } from "../../../slices/categorySlice";
import { useDispatch } from "react-redux";
const ShareableDeleteIconforCards = ({ id }) => {
  const dispatch = useDispatch();
  const removeCardOnDeleteClicked = (event) => {
    const deleteCategoryFromDatabase = async () => {
      try {
        await axios.delete(
          `https://menuhub-backend.herokuapp.com/product/delete/${id}`
        );
        const resOfCategories = await axios.get(
          `https://menuhub-backend.herokuapp.com/category/all`
        );
        dispatch(addMultipleToCategories(resOfCategories.data));
      } catch (err) {}
    };

    deleteCategoryFromDatabase();
  };

  return (
    <IconButton
      onClick={() => removeCardOnDeleteClicked()}
      color="error"
      aria-label="add to favorites"
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default ShareableDeleteIconforCards;
