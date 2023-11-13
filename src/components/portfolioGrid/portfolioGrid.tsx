import GridCard from '../gridCard/gridCard'
import styles from './portfolioGrid.module.css'

/* Content Images */
import roboNewsImage from '../../../public/robo-news-icon.png'
import roboNewsImageModal from '../../../public/robo-news.jpg'
import portfolioImage from '../../../public/favicon.svg'
import portfolioImageModal from '../../../public/portfolio.jpg'
import blogfeelImage from '../../../public/blogfeel-icon.png'
import blogfeelImageModal from '../../../public/blogfeel.webp'
import homeAppImage from '../../../public/homeapp-image.png'
import homeAppImageModal from '../../../public/homeApp.jpg'

interface portfolioGridProps {
    miniApp?: boolean
}

const PortfolioGrid = ({ miniApp }: portfolioGridProps) => {
    return (
        <div className={miniApp ? styles.miniAppContainer : styles.container}>
            <GridCard
                title="Robo-News"
                introText="News site with 100% AI generated content, built with NextJs, NodeJs, Express and MariaDb"
                imageFront={roboNewsImage}
                objectFit="cover"
                fullText="News site with 100% AI generated content, built with NextJs, NodeJs, Express and MariaDb"
                imageModal={roboNewsImageModal}
                devIcons={{
                    nextjs: true,
                    linux: true,
                    typescript: true,
                    mariadb: true,
                    nodejs: true,
                    express: true,
                    react: true,
                }}
                portfolioLinks={{ website: 'https://robo-news.com' }}
                miniApp={miniApp}
            />
            <GridCard
                title="Portfolio"
                introText="Portfolio site built with NextJs and 100% custom components."
                imageFront={portfolioImage}
                objectFit="contain"
                fullText="Portfolio site built with NextJs and 100% custom components."
                imageModal={portfolioImageModal}
                devIcons={{
                    nextjs: true,
                    linux: true,
                    typescript: true,
                    react: true,
                }}
                portfolioLinks={{ website: 'https://puntilachain.com' }}
                miniApp={miniApp}
            />
            <GridCard
                title="Blogfeel"
                introText="Blog-Application for Android and IoS, built with React-native, NodeJs, Express and MariaDb"
                imageFront={blogfeelImage}
                objectFit="cover"
                fullText="Blog-Application for Android and IoS, built with React-native, NodeJs, Express and MariaDb"
                devIcons={{
                    reactNative: true,
                    linux: true,
                    typescript: true,
                    mariadb: true,
                    nodejs: true,
                    express: true,
                }}
                imageModal={blogfeelImageModal}
                portfolioLinks={{
                    googlePlay:
                        'https://play.google.com/store/apps/details?id=app.blogfeel.App&hl=en&gl=US',
                }}
                miniApp={miniApp}
            />
            <GridCard
                title="Home-App"
                introText="Control everything from server to Alexa with this mobile app, built with React-Native, NodeJs and Express"
                imageFront={homeAppImage}
                objectFit="contain"
                fullText="Control everything from server to Alexa with this mobile app, built with React-Native, NodeJs and Express"
                imageModal={homeAppImageModal}
                devIcons={{
                    reactNative: true,
                    linux: true,
                    typescript: true,
                    mariadb: true,
                    nodejs: true,
                    express: true,
                }}
                miniApp={miniApp}
            />
        </div>
    )
}

export default PortfolioGrid
