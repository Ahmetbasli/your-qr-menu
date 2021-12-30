import * as React from "react";
import { Grid } from "@mui/material";

import ProductCard from "../../components/ProductCard/ProductCard";
import AddProductCard from "../../components/AddProductCard/AddProductCard";

import styles from "./ProductFeed.module.css";
const ProductFeed = ({ products, categoryIdOfProductFeed }) => {
  return (
    <div className={styles.productFeed}>
      <Grid container spacing={{ xs: 4 }}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          container
          alignItems="center"
          justifyContent="center"
        >
          <AddProductCard categoryIdOfProductFeed={categoryIdOfProductFeed} />
        </Grid>
        {!!products &&
          products.map((product) => {
            return (
              <Grid
                key={product._id}
                item
                xs={12}
                md={6}
                lg={4}
                container
                alignItems="center"
                justifyContent="center"
              >
                <ProductCard
                  item
                  title={product.title}
                  productImage={product?.productImage}
                  description={product.description}
                  price={product.productPrice}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductFeed;
