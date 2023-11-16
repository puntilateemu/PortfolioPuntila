import styles from './resumeContact.module.css'
import Image from 'next/image'

/* Icons */
import mailIcon from '../../../public/mail-icon.svg'
import githubIcon from '../../../public/github-icon.svg'
import websiteIcon from '../../../public/website-icon.svg'
import homeIcon from '../../../public/home-icon.svg'
import linkedInIcon from '../../../public/linkedIn-icon.svg'

interface resumeContactProps {
    miniApp?: boolean
}

const ResumeContact = ({ miniApp }: resumeContactProps) => {
    return (
        <div className={styles.container}>
            <div className={miniApp ? styles.gridMiniApp : styles.grid}>
                <div className={styles.row}>
                    <Image
                        src={mailIcon}
                        alt="mail-icon"
                        className={styles.image}
                        quality={70}
                    />
                    <p className={styles.text}>puntilateemu@gmail.com</p>
                </div>
                <div className={styles.row}>
                    <Image
                        src={githubIcon}
                        alt="github-icon"
                        className={styles.image}
                        quality={70}
                    />
                    <a
                        target="_blank"
                        className={styles.link}
                        href="https://github.com/puntilateemu"
                    >
                        https://github.com/puntilateemu
                    </a>
                </div>

                <div className={styles.row}>
                    <Image
                        src={homeIcon}
                        alt="home-icon"
                        className={styles.image}
                        quality={70}
                    />
                    <p className={styles.text}>Espoo, Finland</p>
                </div>
                <div className={styles.empty} />
                <div className={styles.row}>
                    <Image
                        src={linkedInIcon}
                        alt="linkedIn-icon"
                        className={styles.image}
                        quality={70}
                    />
                    <a
                        target="_blank"
                        className={styles.link}
                        href="https://linkedin.com/in/teemu-puntila-42a60422b"
                    >
                        https://linkedin.com/in/teemu-puntila-42a60422b
                    </a>
                </div>
                <div className={styles.row}>
                    <Image
                        src={websiteIcon}
                        alt="website-icon"
                        className={styles.image}
                        quality={70}
                    />
                    <a className={styles.link} href="https://puntilachain.com">
                        https://puntilachain.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ResumeContact
