import React, { useEffect } from "react";
// styles
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFromCategories } from "../../slices/categorySlice";
import { selectCategories } from "../../slices/categorySlice";
import { useSelector } from "react-redux";
import Image from "next/image";
import styles from "./CategoryCard.module.css";

function CategoryCard({ title, categoryImage, id }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  //to resfreh component

  const removeCardOnDeleteClicked = (event) => {
    const deleteCategoryFromDatabase = async () => {
      try {
        const res = await axios.delete(
          `https://menuhub-backend.herokuapp.com/category/delete/${id}`
        );

        dispatch(removeFromCategories(id));
      } catch (err) {}
    };

    deleteCategoryFromDatabase();
  };

  const stopCardClickEventOnCardActionsArea = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className={styles.card}>
        {categoryImage && (
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={`https://menuhub-backend.herokuapp.com/upload/${categoryImage}`}
              alt={title}
              layout="fill"
            />
          </div>
        )}
        <h3 className={categoryImage ? styles.title : styles.titleNoImg}>
          {title}
        </h3>
      </div>
    </>
  );
}

export default CategoryCard;
