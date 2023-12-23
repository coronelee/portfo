import { useState, useEffect } from "react";
import styles from "../styles/Header.module.scss";
import { RxVercelLogo } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
function getWindowSize() {
  const width = window.innerWidth;
  return width;
}
export default function Header() {
  const [clicked, setClicked] = useState(false);
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

  if(clicked){
    document.body.style.overflow = "hidden"
  }else{document.body.style.overflow = "visible"}
  return (
    <div className={styles.wrapper}>
      {clicked ? (
        <div className={styles.menuHamburger} onClick={()=>setClicked(false)}>
          <a href="#main">ГЛАВНАЯ</a>
          <a href="#aboutme">ОБО МНЕ</a>
          <a href="#works">РАБОТЫ</a>
        </div>
      ) : (
        ""
      )}
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__logo}>
          <RxVercelLogo />
        </div>
        <div className={styles.wrapper__container__buttonsBar}>
          {windowSize < 500 ? (
            <>
              {!clicked ? (
                <CiMenuFries onClick={() => setClicked(!clicked)} />
              ) : (
                <CgClose onClick={() => setClicked(!clicked)} />
              )}
            </>
          ) : (
            <>
              <a href="main">ГЛАВНАЯ</a>
              <a href="#aboutme">ОБО МНЕ</a>
              <a href="#works">РАБОТЫ</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
