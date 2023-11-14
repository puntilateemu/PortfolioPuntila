import Button from '../button/button'
import SocialLinks from '../socialLinks/socialLinks'
import ThemeButton from '../themeButton/themeButton'
import styles from './homeIntro.module.css'

const HomeIntro = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.bigText}>Hi,</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities*/}
                <h1 className={styles.bigText}>I'm Teemu Puntila</h1>
                <h1 className={styles.bigText}>Full-Stack Developer</h1>
            </div>
            <div className={styles.smallTextContainer}>
                <p className={styles.smallText}>
                    C# / C++ / Assembly / Flutter / Java / Python / JavaScript /
                    TypeScript / React / NextJS / React-Native / Angular /
                    NodeJS / MariaDB / AWS / FireBase
                </p>
            </div>
            <div className={styles.buttonRow}>
                <Button url="/portfolio" text="My Work" buttonStyle="fill" />
                <Button
                    url="/resume/#Contact"
                    text="Contact Me"
                    buttonStyle="empty"
                />
            </div>
            <SocialLinks />
            <div className={styles.themeButtonContainer}>
                <ThemeButton />
            </div>
        </div>
    )
}

export default HomeIntro
