import { Metadata } from 'next'
import styles from './page.module.css'
import CodeTitle from '@/components/codeTitle/codeTitle'
import Contact from '@/components/contact/contact'
import ResumeSection from '@/components/resume/resume'

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
    return (
        <div className={styles.container}>
            <CodeTitle text="Resume" />
            <ResumeSection />
            <CodeTitle text="ContactMe" />
            <Contact />
        </div>
    )
}

export default Resume
