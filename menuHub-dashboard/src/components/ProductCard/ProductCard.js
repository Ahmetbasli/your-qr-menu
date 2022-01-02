import React, { useEffect } from "react";
// styles
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import ShareableDeleteIconforCards from "../Common/ShareableDeleteIconforCards/ShareableDeleteIconforCards";
import EditIconOfProductCard from "../EditIconOfProductCard/EditIconOfProductCard";
import styles from "./ProductCard.module.css";
import Image from "next/image";
function ProductCard({
  title,
  description,
  price,
  productImage,
  id,
  categoryIdOfProductFeed,
}) {
  const stopCardClickEventOnCardActionsArea = (event) => {
    //event.stopPropagation();
  };
  return (
    <>
      <div className={styles.card}>
        <div>
          {productImage && (
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={`https://menuhub-backend.herokuapp.com/upload/${productImage}`}
                alt={title}
                layout="fill"
              />
            </div>
          )}
          <div className={productImage ? styles.info : styles.infoNoImg}>
            <h3 className={styles.title}>{title}</h3>
            {description !== "undefined" && description !== "null" ? (
              <h4 className={styles.description}>{description}</h4>
            ) : (
              "  "
            )}
            {price !== "undefined" && price !== "null" ? (
              <h5 className={styles.price}>{price} ₺</h5>
            ) : (
              " "
            )}
          </div>
        </div>
      </div>
      <CardActions
        onClick={(event) => stopCardClickEventOnCardActionsArea(event)}
        //style={cardStyle.options}
      >
        <ShareableDeleteIconforCards id={id} />
        <EditIconOfProductCard id={id} />
      </CardActions>
    </>
  );
}

export default ProductCard;
