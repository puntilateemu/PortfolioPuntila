import { portfolio } from '@/types/portfolio'
import styles from './modal.module.css'
import CodeTitle from '../codeTitle/codeTitle'
import CloseButton from '../closeButton/closeButton'
import Divider from '../divider/divider'
import Image from 'next/image'
import DevIcons from '../devIcons/devIcons'
import PortfolioLinks from '../portfolioLinks/portfolioLinks'

interface modalProps {
    close: () => void
    open: boolean
    portfolio: portfolio
}

const Modal = ({ close, portfolio, open }: modalProps) => {
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
                <CloseButton onCLick={close} />
                <CodeTitle text={portfolio.title} noCode />
                <div className={styles.contentRow}>
                    <div className={styles.contentColumn}>
                        {portfolio.imageModal && (
                            <Image
                                className={styles.image}
                                src={portfolio.imageModal}
                                quality={100}
                                alt={`${portfolio.title}-intro-image`}
                            />
                        )}

                        <DevIcons devIcons={portfolio.devIcons} />
                    </div>

                    <Divider height="90%" hideMobile />

                    <div className={styles.contentColumn}>
                        <p>{portfolio.fullText}</p>
                        {portfolio.portfolioLinks && (
                            <PortfolioLinks
                                portfolioLinks={portfolio.portfolioLinks}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
