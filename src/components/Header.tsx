import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.scss";
import { RxVercelLogo } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import Hamburger from "./Hamburger";
function getWindowSize() {
  const width = window.innerWidth;
  return width;
}
export default function Header() {
  const [clicked, setClicked] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__logo}>
          <RxVercelLogo />
        </div>
        <div className={styles.wrapper__container__buttonsBar}>
          {windowSize < 500 ? (
            <>
            {!clicked ? <CiMenuFries onClick={() => setClicked(!clicked)}/> : <CgClose onClick={() => setClicked(!clicked)}/>}
            </>
          ) : (
            <>
              <a href="main">ГЛАВНАЯ</a>
              <a href="#aboutme">ОБО МНЕ</a>
              <a href="works">РАБОТЫ</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
