import LinkContainer from '../linkContainer/linkContainer'
import LinkContainerMiniApp from '../linkContainer/linkContainerMiniApp'
import ThemeButton from '../themeButton/themeButton'
import styles from './navBar.module.css'

interface navBarProps {
    miniApp?: boolean
    onClickHome?: () => void
    onClickPortfolio?: () => void
    onClickResume?: () => void
}

const NavBar = ({
    miniApp,
    onClickHome,
    onClickPortfolio,
    onClickResume,
}: navBarProps) => {
    return (
        <div className={!miniApp ? styles.container : styles.miniApp}>
            {!miniApp && (
                <div className={styles.themeButtonContainer}>
                    <ThemeButton />
                </div>
            )}
            {!miniApp ? (
                <LinkContainer />
            ) : (
                <LinkContainerMiniApp
                    onClickHome={onClickHome}
                    onClickPortfolio={onClickPortfolio}
                    onClickResume={onClickResume}
                />
            )}
        </div>
    )
}

export default NavBar
