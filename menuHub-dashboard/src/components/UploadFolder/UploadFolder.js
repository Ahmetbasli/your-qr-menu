import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import styles from "./UploadFolder.module.css";
import { Typography } from "@mui/material";
const UploadFolder = () => {
  const [uploadedImg, setUploadedImg] = useState({ error: true });

  const handeOnFileChange = (e) => {
    setUploadedImg((prev) => {
      const file = e.target.files[0];
      const extention = file?.type.split("/")[1];

      if (extention === "jpeg" || extention === "png" || extention === "jpg") {
        return { error: false, file };
      } else {
        return { error: true, file };
      }
    });
  };

  return (
    <>
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
            <input
              type="file"
              className={styles.input}
              onChange={(e) => handeOnFileChange(e)}
            />
          </label>
        </div>
      </div>
      {!uploadedImg.error ? (
        uploadedImg.file.name
      ) : (
        <p className={styles.errorMessage}>
          {uploadedImg.file && "Yanlış uzantısı bir dosya girdiniz."}
        </p>
      )}
    </>
  );
};

export default UploadFolder;
