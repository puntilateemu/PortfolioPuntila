import styles from './tooltip.module.css'

interface tooltipProps {
    children: React.ReactNode
    text: string
}

const Tooltip = ({ children, text }: tooltipProps) => {
    return (
        <div className={styles.tooltip}>
            {children}
            <span className={styles.tooltipText}>{text}</span>
        </div>
    )
}

export default Tooltip
