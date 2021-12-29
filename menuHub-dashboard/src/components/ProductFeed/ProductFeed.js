import * as React from "react";
import { Grid } from "@mui/material";

import CategoryCard from "../../components/CategoryCard/CategoryCard";
import AddProductCard from "../../components/AddProductCard/AddProductCard";

import styles from "./ProductFeed.module.css";
const ProductFeed = ({ products }) => {
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
          <AddProductCard />
        </Grid>
        {!!products &&
          products.map((product) => {
            return (
              <Grid
                key={product._id}
                item
                xs={12}
                md={4}
                container
                alignItems="center"
                justifyContent="center"
              >
                <ProductCard
                  item
                  title={product.title}
                  productImage={product?.productImage}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductFeed;
