'use client'

import { portfolioLinks } from '@/types/portfolioLinks'
import styles from './portfolioLinks.module.css'

interface portfolioLinksProps {
    portfolioLinks: portfolioLinks
}

const PortfolioLinks = ({ portfolioLinks }: portfolioLinksProps) => {
    return (
        <div className={styles.container}>
            {portfolioLinks.website && (
                <p
                    className={styles.link}
                    onClick={() => window.open(portfolioLinks.website)}
                >
                    Website
                </p>
            )}
            {portfolioLinks.github && (
                <p
                    className={styles.link}
                    onClick={() => window.open(portfolioLinks.github)}
                >
                    Github
                </p>
            )}
            {portfolioLinks.googlePlay && (
                <p
                    className={styles.link}
                    onClick={() => window.open(portfolioLinks.googlePlay)}
                >
                    Google Play
                </p>
            )}
        </div>
    )
}

export default PortfolioLinks
