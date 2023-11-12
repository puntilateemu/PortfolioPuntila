import { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Teemu Puntila - Resume',
    description: 'Teemu Puntila Resume',
    openGraph: {
        title: 'Teemu Puntila',
        description: 'Teemu Puntila Resume',

        images: ['/favicon.ico'],
    },
}

const Resume = () => {
    return <div className={styles.container}></div>
}

export default Resume
