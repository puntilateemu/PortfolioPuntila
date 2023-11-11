import CodeTitle from '@/components/codeTitle/codeTitle'
import styles from './page.module.css'
import PortfolioGrid from '@/components/portfolioGrid/portfolioGrid'

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
