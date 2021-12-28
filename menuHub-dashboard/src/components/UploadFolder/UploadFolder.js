import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import styles from "./UploadFolder.module.css";
import { Typography } from "@mui/material";
const UploadFolder = () => {
  return (
    <div className={styles.wrapper}>
      <Typography
        variant="p"
        className={styles.extentionDescription}
        component="div"
        align="center"
        gutterBottom
      >
        .jpg .png veya .jpeg Uzantılı dosyalar kabul edilir.
      </Typography>
      <div className={styles.imageWrapper}>
        <label className={styles.label}>
          <div className={styles.smallWrapper}>
            <ImageIcon className={styles.icon} />
            <p className={styles.paragraf}>Bir fotograf seç</p>
          </div>
          <input type="file" className={styles.input} />
        </label>
      </div>
    </div>
  );
};

export default UploadFolder;
