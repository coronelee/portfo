
import styles from "../styles/Works.module.scss";
export default function Works() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__container}>
        <h1>РАБОТЫ</h1>
        <div className={styles.line}></div>
        <h4>
          Это некоторые из проектов, которые я создал, чтобы практиковаться и
          совершенствоваться в технологиях, упомянутых выше.
        </h4>

        <div className={styles.items}>
            <div className={styles.items__project}>
                <div className={styles.project__preview}></div>
                <div className={styles.project__about}></div>
            </div>
            <div className={styles.items__project}>
                <div className={styles.project__preview}></div>
                <div className={styles.project__about}></div>
            </div>
            <div className={styles.items__project}>
                <div className={styles.project__preview}></div>
                <div className={styles.project__about}></div>
            </div>
            <div className={styles.items__project}>
                <div className={styles.project__preview}></div>
                <div className={styles.project__about}></div>
            </div>
            <div className={styles.items__project}>
                <div className={styles.project__preview}></div>
                <div className={styles.project__about}></div>
            </div>
            <div className={styles.items__project}>
                <div className={styles.project__preview}></div>
                <div className={styles.project__about}></div>
            </div>
        </div>
      </div>
    </div>
  );
}
