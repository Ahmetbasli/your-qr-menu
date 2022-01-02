import * as React from "react";
import { Grid } from "@mui/material";

import ProductCard from "../../components/ProductCard/ProductCard";

import styles from "./ProductFeed.module.css";
const ProductFeed = ({ products, categoryIdOfProductFeed }) => {
  return (
    <div className={styles.productFeed}>
      <Grid container spacing={{ xs: 4 }}>
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
                  id={product._id}
                  item
                  categoryIdOfProductFeed={categoryIdOfProductFeed}
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
