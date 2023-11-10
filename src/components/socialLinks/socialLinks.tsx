'use client'

import styles from './socialLinks.module.css'
import Image from 'next/image'
import githubIcon from '../../../public/github-icon.svg'
import linkedInIcon from '../../../public/linkedIn-icon.svg'
import mailIcon from '../../../public/mail-icon.svg'
import Divider from '../divider/divider'

const SocialLinks = () => {
    return (
        <div className={styles.container}>
            <Divider />
            <Image
                src={linkedInIcon}
                className={styles.icon}
                alt="linkedIn-icon"
                priority={false}
                width={180}
                height={180}
                onClick={() =>
                    window.open(
                        'https://linkedin.com/in/teemu-puntila-42a60422b'
                    )
                }
            />

            <Image
                src={githubIcon}
                className={styles.icon}
                alt="github-icon"
                priority={false}
                width={180}
                height={180}
                onClick={() => window.open('https://github.com/puntilateemu')}
            />

            <Image
                src={mailIcon}
                className={styles.icon}
                alt="mail-icon"
                priority={false}
                width={180}
                height={180}
                onClick={(e) => {
                    window.location.href = 'mailto:puntilateemu@gmail.com'
                    e.preventDefault()
                }}
            />
        </div>
    )
}

export default SocialLinks
