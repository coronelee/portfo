import React from "react";
import styles from "../styles/Footer.module.scss";
import { RxVercelLogo } from "react-icons/rx";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { LuMailOpen } from "react-icons/lu";
export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <div className={styles.container__leftBlock}>
          <RxVercelLogo />
          <h4>
            Спасибо за просмотр моего портфолио. <br /> В настоящее время я
            открыт для работы.
          </h4>
        </div>
        <div className={styles.container__rightBlock}>
            <h4>Связь со мной</h4>
            <div><a href="https://t.me/yourantosha"><FaTelegram /></a><a href="https://vk.com/6old6"><SlSocialVkontakte/></a></div>
            <a href="mailto:tacontactta@gmail.com"><LuMailOpen/>tacontactta@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
