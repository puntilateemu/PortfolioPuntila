import styles from './closeButton.module.css'
import Image from 'next/image'
import closeIcon from '../../../public/close-icon.svg'

interface closeButtonProps {
    onCLick: () => void
}

const CloseButton = ({ onCLick }: closeButtonProps) => {
    return (
        <Image
            src={closeIcon}
            alt="close-button"
            className={styles.image}
            quality={90}
            onClick={onCLick}
        />
    )
}

export default CloseButton
