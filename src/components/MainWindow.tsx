
import styles from '../styles/MainWindow.module.scss'
export default function MainWindow() {
  return (
    <div className={styles.wrapper} id="main">
        <div className={styles.wrapper__container}>
            <div className={styles.container__Leftblock}>
                <h5>Привет! Меня зовут</h5>
                <h1>Антон,</h1>
                <h4>увлеченный фронтенд-разработчик, специализирующийся на создании интерактивных, доступных и адаптивных веб-сайтов.</h4>
                <a href='#works'>Мои работы</a>
            </div>
            <div className={styles.container__Rightblock}>
              <div></div>
            </div>
        </div>
    </div>
  )
}
