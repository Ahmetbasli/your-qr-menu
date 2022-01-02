import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
function ProductCard({ title, description, price, productImage }) {
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
    </>
  );
}

export default ProductCard;
