'use client'

import { useState } from 'react'
import HomeIntroMiniApp from '../homeIntro/homeIntroMiniApp'
import NavBar from '../navBar/navBar'
import styles from './miniApp.module.css'
import CodeTitle from '../codeTitle/codeTitle'
import PortfolioGrid from '../portfolioGrid/portfolioGrid'
import Contact from '../contact/contact'
import ResumeMiniApp from '../resume/resumeMiniApp'

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
                    onClickContact={() => {
                        setMiniAppRoute('resume')
                    }}
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
            {miniAppRoute === 'resume' && (
                <div className={styles.containerResume}>
                    <CodeTitle miniApp text="Resume" />
                    <ResumeMiniApp />
                    <CodeTitle miniApp text="ContactMe" />
                    <Contact miniApp />
                </div>
            )}
        </div>
    )
}

export default MiniApp
