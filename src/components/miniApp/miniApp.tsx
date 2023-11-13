'use client'

import { useRef, useState } from 'react'
import HomeIntroMiniApp from '../homeIntro/homeIntroMiniApp'
import NavBar from '../navBar/navBar'
import styles from './miniApp.module.css'
import CodeTitle from '../codeTitle/codeTitle'
import PortfolioGrid from '../portfolioGrid/portfolioGrid'

const MiniApp = () => {
    const [miniAppRoute, setMiniAppRoute] = useState<string>('home')

    return (
        <div className={styles.container}>
            <NavBar
                miniApp
                onClickHome={() => setMiniAppRoute('home')}
                onClickPortfolio={() => setMiniAppRoute('portfolio')}
                onClickResume={() => setMiniAppRoute('resume')}
            />
            {miniAppRoute === 'home' && (
                <HomeIntroMiniApp
                    onClickMyWork={() => setMiniAppRoute('portfolio')}
                />
            )}
            {miniAppRoute === 'portfolio' && (
                <div className={styles.containerPortfolio}>
                    <div />
                    <CodeTitle miniApp text="MyLatestProjects" />
                    <PortfolioGrid miniApp />
                    <div />
                </div>
            )}
        </div>
    )
}

export default MiniApp
