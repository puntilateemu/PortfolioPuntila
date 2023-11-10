import styles from './codeTitle.module.css'

interface codeTitleProps {
    text: string
}

const CodeTitle = ({ text }: codeTitleProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.code}>{'<'}</h3>
            <h3 className={styles.title}>{text}</h3>{' '}
            <h3 className={styles.code}>{'/>'}</h3>
        </div>
    )
}

export default CodeTitle
