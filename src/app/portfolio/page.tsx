import CodeTitle from '@/components/codeTitle/codeTitle'
import styles from './page.module.css'
import PortfolioGrid from '@/components/portfolioGrid/portfolioGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Teemu Puntila - Portfolio',
    description: 'Teemu Puntila Portfolio',
    openGraph: {
        title: 'Teemu Puntila',
        description: 'Teemu Puntila Portfolio',

        images: ['/favicon.ico'],
    },
}

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <div />
            <CodeTitle text="MyLatestProjects" />
            <PortfolioGrid />
            <div />
        </div>
    )
}

export default Portfolio
