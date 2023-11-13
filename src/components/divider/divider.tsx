import styles from './divider.module.css'

interface dividerProps {
    height: string
    margin?: string
    hideMobile?: boolean
}

const Divider = ({ height, margin, hideMobile }: dividerProps) => {
    return (
        <div
            className={hideMobile ? styles.dividerHideMobile : styles.divider}
            style={{ height: height, margin: margin }}
        ></div>
    )
}

export default Divider
