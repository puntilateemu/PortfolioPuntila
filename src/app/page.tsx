import { Metadata } from 'next'

import styles from './page.module.css'
import HomeIntro from '@/components/homeIntro/homeIntro'
import MiniApp from '@/components/miniApp/miniApp'
export const metadata: Metadata = {
    title: 'Teemu Puntila',
    description: 'Teemu Puntila Portfolio and Projects Webpage.',
    openGraph: {
        title: 'Teemu Puntila',
        description: 'Teemu Puntila Portfolio and Projects Webpage.',

        images: ['/favicon.ico'],
    },
}

export default function Home() {
    return (
        <div className={styles.container}>
            <HomeIntro />
            <div>
                <MiniApp />
            </div>
        </div>
    )
}
