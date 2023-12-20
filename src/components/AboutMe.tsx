import React from "react";
import styles from "../styles/AboutMe.module.scss";
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
              <a href="">мои проекты</a>, где представлены некоторые из
              созданных мной веб-сайтов.
              <br /> <br /> В настоящее время я открыт для вакансий, где я могу
              внести свой вклад в ваш бизнес. Не стесняйтесь обращаться ко мне,
              если вы сочтете мои навыки полезными
            </h2>
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
