import ResumeGrid from '../resumeGrid/resumeGrid'
import styles from './resumeMiniApp.module.css'
import Image from 'next/image'
import resumeImage from '../../../public/teemu_puntila.jpeg'

const ResumeMiniApp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <div className={styles.headerColumn}>
                    <h1 className={styles.name}>Teemu Puntila</h1>
                    <p className={styles.subTitle}>Software Developer</p>
                </div>
                <Image
                    className={styles.image}
                    src={resumeImage}
                    alt="Teemu-puntila-image"
                    quality={100}
                />
            </div>
            <ResumeGrid miniApp />
        </div>
    )
}

export default ResumeMiniApp
