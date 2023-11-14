import styles from './resumeGridSection.module.css'

interface resumeGridSectionProps {
    text: string
    gridSection?: gridSection
}

type gridSection = {
    title: string
    location: string
    duration: string
}

const ResumeGridSection = ({ text, gridSection }: resumeGridSectionProps) => {
    return (
        <div className={styles.container}>
            {gridSection && (
                <div className={styles.column}>
                    <p>{gridSection.title}</p>
                    <p>{gridSection.location}</p>
                    <p>{gridSection.duration}</p>
                </div>
            )}
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default ResumeGridSection
