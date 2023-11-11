import styles from './modal.module.css'

interface modalProps {
    close: () => void
    open: boolean
}

const Modal = ({ close, open }: modalProps) => {
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            close()
        }
    }
    return (
        <div
            className={open ? styles.container : styles.closed}
            onClick={(e) => handleClose(e)}
        >
            <div className={styles.modal}>
                <p>Item</p>
            </div>
        </div>
    )
}

export default Modal
