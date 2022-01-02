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
//routing
import Link from "next/link";
const CategoryFeed = () => {
  const categories = useSelector(selectCategories);
  return (
    <div className={styles.productFeed}>
      <Grid container spacing={{ xs: 2 }}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          style={{ width: "100%" }}
          alignItems="center"
          justifyContent="center"
        >
          <AddCategoryCard />
        </Grid>
        {categories &&
          categories.map((category) => {
            return (
              <Grid
                key={category._id}
                item
                xs={6}
                md={6}
                lg={4}
                alignItems="center"
                justifyContent="center"
              >
                <Link passHref href="/demo/[id]" as={`/demo/${category._id}`}>
                  <div>
                    <CategoryCard
                      id={category._id}
                      item
                      title={category.title}
                      categoryImage={category?.categoryImage}
                    />
                  </div>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default CategoryFeed;
