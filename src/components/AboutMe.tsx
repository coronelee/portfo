import styles from "../styles/AboutMe.module.scss";
import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { LuMailOpen } from "react-icons/lu";
export default function AboutMe() {
  return (
    <div className={styles.wrapper} id="aboutme">
      <div className={styles.wrapper__container}>
        <h1>Обо мне</h1>
        <div className={styles.container__line}></div>
        <h4>
          Вы найдете небольшое введение обо мне, а также о навыках и
          технологиях, которые я использую ежедневно.
        </h4>
        <div className={styles.skills}>
          <div className={styles.container__leftBlock}>
            <h1>Хотите узнать меня поближе?</h1>
            <h2>
              Я Frontend-разработчик, увлеченный созданием интерактивных,
              доступных и адаптивных веб-сайтов. Ознакомьтесь с разделом{" "}
              <a href="#works">мои проекты</a>, где представлены некоторые из
              созданных мной веб-сайтов.
              <br /> <br /> В настоящее время я открыт для вакансий, где я могу
              внести свой вклад в ваш бизнес. Не стесняйтесь обращаться ко мне,
              если вы сочтете мои навыки полезными
            </h2>
            <h4>Связь со мной</h4>
            <div>
              <a href="https://t.me/yourantosha">
                <FaTelegram />
              </a>
              <a href="https://vk.com/6old6">
                <SlSocialVkontakte />
              </a>
            </div>
            <a href="mailto:tacontactta@gmail.com">
              <LuMailOpen />
              <span>tacontactta@gmail.com</span>
            </a>
          </div>
          <div className={styles.container__rightBlock}>
            <h1>Умения и технологии</h1>
            <h2>Я активно использую и знаком со следующим:</h2>
            <h1>Активно использую:</h1>
            <div className={styles.tech}>
              <span>css</span>
              <span>scss</span>
              <span>JavaScript</span>
              <span>ReactJs</span>
              <span>Git</span>
              <span>Figma</span>
              <span>GIMP</span>
              <span>Photoshop</span>
              <span>VSCode</span>
              <span>БЭМ</span>
              <span>vite</span>
              <span>adaptive</span>
              <span>cross-browser</span>
              <span>vue</span>
              <span>tailwindcss</span>
            </div>
            <h1>Знаком с:</h1>
            <div className={styles.tech}>
              <span>typescript</span>
              <span>mysql</span>
              <span>NextJs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
