import React from "react";

//styles
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      {
        " Am'lara gerektiğinden fazla değer verme. Pembe amin bile gölgesi siyahtir"
      }
    </div>
  );
};

export default Header;
