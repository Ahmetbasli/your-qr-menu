import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

//styles
import styles from "./Header.module.css";
//routing
import Link from "next/link";

const Header = () => {
  const isLogin = true;
  const [isInCategoryUrl, setIsInCategoryUrl] = useState(true);

  useEffect(() => {
    const isInCategoryUrl =
      window?.location.pathname.split("/").length > 2 ? false : true;
    setIsInCategoryUrl(isInCategoryUrl);
  }, []);
  return (
    <>
      {isLogin ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className={styles.header} position="static">
            {!isInCategoryUrl && (
              <Link className={styles.headerLogo} href="/demo/">
                <div className={styles.backtoMenu}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.41412 13L12.707 19.2929L11.2928 20.7071L2.58569 12L11.2928 3.29289L12.707 4.70711L6.41412 11H20.9999V13H6.41412Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </Link>
            )}

            <div className={styles.wrapper}>
              <Link className={styles.headerLogo} href="/demo/">
                <img
                  src="https://oddmenu.com/_nuxt/img/default-logo.c4885a5.svg"
                  alt="OddMenu Demo logo"
                  width="80px"
                  height="80px"
                />
              </Link>
            </div>
          </AppBar>
        </Box>
      ) : (
        "menü"
      )}
    </>
  );
};

export default Header;
