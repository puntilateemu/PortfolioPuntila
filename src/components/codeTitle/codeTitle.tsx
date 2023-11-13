import styles from './codeTitle.module.css'

interface codeTitleProps {
    text: string
    noCode?: boolean
    miniApp?: boolean
}

const CodeTitle = ({ text, noCode, miniApp }: codeTitleProps) => {
    return (
        <div className={miniApp ? styles.containerMiniApp : styles.container}>
            {!noCode && <h3 className={styles.code}>{'<'}</h3>}
            <h3 className={styles.title}>{text}</h3>{' '}
            {!noCode && <h3 className={styles.code}>{'/>'}</h3>}
        </div>
    )
}

export default CodeTitle
