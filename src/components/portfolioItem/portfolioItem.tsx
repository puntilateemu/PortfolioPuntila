import { portfolioStatic } from '@/types/portfolio'
import styles from './portfolioItem.module.css'
import Image from 'next/image'
import DevIcons from '../devIcons/devIcons'
import PortfolioLinks from '../portfolioLinks/portfolioLinks'

interface portfolioItemsProps {
    data: portfolioStatic
}

const PortfolioItems = ({ data }: portfolioItemsProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <Image
                    src={data.imageFront}
                    alt={`${data.title} - image`}
                    className={styles.image}
                    width={680}
                    height={680}
                    priority
                />
                <DevIcons devIcons={data.devIcons} />
            </div>
            <div className={styles.column}>
                <p>{data.fullText}</p>
                {data.portfolioLinks && (
                    <PortfolioLinks portfolioLinks={data.portfolioLinks} />
                )}
            </div>
        </div>
    )
}

export default PortfolioItems
