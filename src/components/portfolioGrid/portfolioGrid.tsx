import GridCard from '../gridCard/gridCard'
import styles from './portfolioGrid.module.css'

/* Content Images */
import roboNewsImage from '../../../public/robo-news-icon.png'
import roboNewsImageModal from '../../../public/robo-news.jpg'
import portfolioImage from '../../../public/favicon.svg'
import blogfeelImage from '../../../public/blogfeel-icon.png'
import homeAppImage from '../../../public/homeapp-image.png'

const PortfolioGrid = () => {
    return (
        <div className={styles.container}>
            <GridCard
                title="Robo-News"
                introText="News site with 100% AI generated content, built with NextJs, NodeJs, Express and MariaDb"
                imageFront={roboNewsImage}
                objectFit="cover"
                fullText="News site with 100% AI generated content, built with NextJs, NodeJs, Express and MariaDb"
                imageModal={roboNewsImageModal}
            />
            <GridCard
                title="Portfolio"
                introText="Portfolio site built with NextJs and 100% custom components."
                imageFront={portfolioImage}
                objectFit="contain"
                fullText="Portfolio site built with NextJs and 100% custom components."
            />
            <GridCard
                title="Blogfeel"
                introText="Blog-Application for Android and IoS, built with React-native, NodeJs, Express and MariaDb"
                imageFront={blogfeelImage}
                objectFit="cover"
                fullText="Blog-Application for Android and IoS, built with React-native, NodeJs, Express and MariaDb"
            />
            <GridCard
                title="Home-App"
                introText="Control everything from server to Alexa with this mobile app, built with React-Native, NodeJs and Express"
                imageFront={homeAppImage}
                objectFit="contain"
                fullText="Control everything from server to Alexa with this mobile app, built with React-Native, NodeJs and Express"
            />
        </div>
    )
}

export default PortfolioGrid
