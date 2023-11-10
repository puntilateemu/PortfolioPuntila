import HomeIntroMiniApp from '../homeIntro/homeIntroMiniApp'
import NavBar from '../navBar/navBar'
import styles from './miniApp.module.css'

const MiniApp = () => {
    return (
        <div className={styles.container}>
            <NavBar miniApp />
            <HomeIntroMiniApp />
        </div>
    )
}

export default MiniApp
