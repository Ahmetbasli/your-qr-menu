import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
//styles
import styles from "./Header.module.css";

const Header = () => {
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            style={{ background: "purple", marginBottom: "10px" }}
          >
            <Typography
              className={styles.header}
              variant="h4"
              component="div"
              gutterBottom
            >
              menuHub
            </Typography>
          </AppBar>
        </Box>
      ) : (
        "menü"
      )}
    </>
  );
};

export default Header;
