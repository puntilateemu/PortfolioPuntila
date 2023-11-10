import styles from './linkContainer.module.css'
import Link from 'next/link'

const LinkContainer = () => {
    return (
        <div>
            <Link className={styles.link} href={'/'}>
                home
            </Link>
            <Link className={styles.link} href={'/portfolio'}>
                portfolio
            </Link>
            <Link className={styles.link} href={'/resume'}>
                resume
            </Link>
        </div>
    )
}

export default LinkContainer
