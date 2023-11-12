import styles from './codeTitle.module.css'

interface codeTitleProps {
    text: string
    noCode?: boolean
}

const CodeTitle = ({ text, noCode }: codeTitleProps) => {
    return (
        <div className={styles.container}>
            {!noCode && <h3 className={styles.code}>{'<'}</h3>}
            <h3 className={styles.title}>{text}</h3>{' '}
            {!noCode && <h3 className={styles.code}>{'/>'}</h3>}
        </div>
    )
}

export default CodeTitle
