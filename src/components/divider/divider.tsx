import styles from './divider.module.css'

interface dividerProps {
    height: string
    margin?: string
}

const Divider = ({ height, margin }: dividerProps) => {
    return (
        <div
            className={styles.divider}
            style={{ height: height, margin: margin }}
        ></div>
    )
}

export default Divider
