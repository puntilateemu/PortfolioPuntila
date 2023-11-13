import styles from './linkContainer.module.css'

export interface linkContainerMiniAppProps {
    onClickHome?: () => void
    onClickPortfolio?: () => void
    onClickResume?: () => void
}

const LinkContainerMiniApp = ({
    onClickHome,
    onClickPortfolio,
    onClickResume,
}: linkContainerMiniAppProps) => {
    return (
        <>
            <p onClick={onClickHome} className={styles.linkMiniApp}>
                home
            </p>
            <p onClick={onClickPortfolio} className={styles.linkMiniApp}>
                portfolio
            </p>
            <p onClick={onClickResume} className={styles.linkMiniApp}>
                resume
            </p>
        </>
    )
}

export default LinkContainerMiniApp
