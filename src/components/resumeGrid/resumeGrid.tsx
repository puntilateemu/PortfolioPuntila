import ResumeGridSection from '../resumeGridSection/resumeGridSection'
import styles from './resumeGrid.module.css'

const ResumeGrid = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Summary</p>
            <ResumeGridSection
                text=" I'm a professional software developer, my skills include
                ReactJS, Typescript, Java, C languages, JavaScript, NextJS,
                React-Native, AWS, Flutter, Firebase, Assembly, Python, SQL, NodeJS, SEO and HTML5/CSS. I am a fast learner and i am able to
                adopt new technologies/programming languages quickly. Teamwork has
                become familiar, I can also work independently and perform well."
            />
            <p className={styles.title}>Experience</p>

            <ResumeGridSection
                gridSection={{
                    title: 'Full-Stack Developer',
                    location: 'Espoo Finland, Nordic Alegna Group Oy',
                    duration: 'April 2023 - November 2023',
                }}
                text=""
            />
            <div />
            <ResumeGridSection
                gridSection={{
                    title: 'Junior Full-Stack Developer',
                    location: 'Helsinki Finland, Helsinki-City',
                    duration: 'January 2023 - April 2023',
                }}
                text="I worked as a member of a team of six people, the tasks included bug fixes and the implementation of new features. 
                Worked on both Front-End (ReactJS, Typescript with Redux) and Back-End (Java, SQL, AWS)."
            />
            <div />
            <ResumeGridSection
                gridSection={{
                    title: 'Trainee software developer',
                    location: 'Espoo Finland, Medigoo Oy',
                    duration: 'May 2022 - September 2022',
                }}
                text="Over the summer in an internship where I did something completely new for the company
                website with wordpress and
                I developed their online store."
            />
        </div>
    )
}

export default ResumeGrid
