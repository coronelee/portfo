
import styles from "../styles/Works.module.scss";
export default function Works() {
  return (
    <div className={styles.wrapper} id="works">
      <div className={styles.wrapper__container}>
        <h1>РАБОТЫ</h1>
        <div className={styles.line}></div>
        <h4>
          Это некоторые из проектов, которые я создал, чтобы практиковаться и
          совершенствоваться в технологиях, упомянутых выше.
        </h4>

        <div className={styles.items}>
            <div className={styles.items__project}>
                <a href="https://coronelee.github.io/transportcompany/"><div className={styles.project__preview} style={{backgroundImage:"../assets/work1.jpg"}}></div></a>
            </div>
            <div className={styles.items__project}>
                <a href="https://github.com/coronelee/avion"><div className={styles.project__preview} style={{backgroundImage:"../assets/work2.jpeg"}}></div></a>
            </div>
        </div>
      </div>
    </div>
  );
}
