import styles from './resumeGridSection.module.css'

interface resumeGridSectionProps {
    text: string
    gridSection?: gridSection
    title?: string
    wordSpacing?: string
}

type gridSection = {
    title: string
    location?: string
    duration?: string
}

const ResumeGridSection = ({
    text,
    title,
    gridSection,
    wordSpacing,
}: resumeGridSectionProps) => {
    return (
        <div className={styles.container}>
            {gridSection && (
                <div className={styles.column}>
                    <p className={styles.sectionTitle}>{gridSection.title}</p>
                    {gridSection.location && (
                        <p className={styles.location}>
                            {gridSection.location}
                        </p>
                    )}
                    {gridSection.duration && (
                        <p className={styles.duration}>
                            {gridSection.duration}
                        </p>
                    )}
                </div>
            )}
            <div className={gridSection ? styles.infoRow : styles.infoRowFull}>
                {title ? (
                    <p className={styles.text}>{title}</p>
                ) : (
                    <p
                        className={styles.text}
                        style={{ wordSpacing: wordSpacing }}
                    >
                        {text}
                    </p>
                )}
            </div>
        </div>
    )
}

export default ResumeGridSection
