import GridCard from '../gridCard/gridCard'
import styles from './portfolioGrid.module.css'

const PortfolioGrid = () => {
    return (
        <div className={styles.container}>
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
        </div>
    )
}

export default PortfolioGrid
