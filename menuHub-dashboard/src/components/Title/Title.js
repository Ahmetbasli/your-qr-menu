import React from "react";

//material ui
import { Typography } from "@mui/material";
//styles
import styles from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <Typography variant="h5" component="div" align="center" gutterBottom>
        {title || "Menü"}
      </Typography>
    </div>
  );
};

export default Title;
