import * as React from "react";
//redux
import { useSelector } from "react-redux";
import { selectCategories } from "../../slices/categorySlice";
//mui
import { Grid } from "@mui/material";
//styles
import styles from "./CategoryFeed.module.css";
// components
import CategoryCard from "../CategoryCard/CategoryCard";
import AddCategoryCard from "../AddCategoryCard/AddCategoryCard";

const CategoryFeed = () => {
  const categories = useSelector(selectCategories);

  console.log(categories);
  return (
    <div className={styles.productFeed}>
      <Grid container spacing={{ xs: 4 }}>
        <Grid
          item
          xs={12}
          md={4}
          container
          alignItems="center"
          justifyContent="center"
        >
          <AddCategoryCard />
        </Grid>
        {!!categories &&
          categories.map((category) => {
            return (
              <Grid
                key={category._id}
                item
                xs={12}
                md={4}
                container
                alignItems="center"
                justifyContent="center"
              >
                <CategoryCard
                  item
                  title={category.title}
                  categoryImage={category?.categoryImage}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default CategoryFeed;
