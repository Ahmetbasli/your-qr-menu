import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import styles from "./UploadFolder.module.css";
import { Typography } from "@mui/material";
const UploadFolder = ({ sendFileData }) => {
  const handeOnFileChange = (e) => {
    const file = e.target.files[0];
    const extention = file?.type.split("/")[1];
    if (!file) {
      return;
    } else if (
      extention === "jpeg" ||
      extention === "png" ||
      extention === "jpg"
    ) {
      sendFileData({ value: file, error: false, errorMessage: " " });
    } else {
      sendFileData({
        value: file,
        error: true,
        errorMessage: `.${extention} uzantılı dosyalar kabul edilmez. `,
      });
    }
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
    </>
  );
};

export default UploadFolder;
