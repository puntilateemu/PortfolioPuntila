import LinkContainer from '../linkContainer/linkContainer'
import LinkContainerMiniApp from '../linkContainer/linkContainerMiniApp'
import ThemeButton from '../themeButton/themeButton'
import styles from './navBar.module.css'

interface navBarProps {
    miniApp?: boolean
}

const NavBar = ({ miniApp }: navBarProps) => {
    return (
        <div className={!miniApp ? styles.container : styles.miniApp}>
            {!miniApp && (
                <div className={styles.themeButtonContainer}>
                    <ThemeButton />
                </div>
            )}
            {!miniApp ? <LinkContainer /> : <LinkContainerMiniApp />}
        </div>
    )
}

export default NavBar
