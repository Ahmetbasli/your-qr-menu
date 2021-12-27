import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import styles from "./UploadFolder.module.css";
import { Typography } from "@mui/material";
const UploadFolder = () => {
  return (
    <>
      <Typography variant="p" component="div" align="center" gutterBottom>
        .jpg .png veya .jpeg Uzantılı dosyalar kabul edilir.
      </Typography>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 cursor-pointer hover:border-gray-300">
          <div className="flex flex-col items-center justify-center pt-7">
            <ImageIcon className={styles.icon} />
            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
              Bir fotograf seç
            </p>
          </div>
          <input type="file" className="opacity-0" />
        </label>
      </div>
    </>
  );
};

export default UploadFolder;
