import ResumeContact from '../resumeContact/resumeContact'
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
                text="Worked as a Full-Stack developer, we had a React - Typescript - Redux, Front-End and NodeJS Back-End with Firebase Database.
                 E-Commerce setup with stripe, login system with Google-Firebase."
            />
            <div />
            <ResumeGridSection
                gridSection={{
                    title: 'Junior Full-Stack Developer',
                    location: 'Helsinki Finland, Helsinki-City',
                    duration: 'January 2023 - April 2023',
                }}
                text="I worked as a member of team of six people, the tasks included bug fixes and the implementation of new features. 
                Worked on both Front-End (ReactJS, Typescript with Redux) and Back-End (Java, SQL, AWS)."
            />
            <div />
            <ResumeGridSection
                gridSection={{
                    title: 'Trainee Software Developer',
                    location: 'Espoo Finland, Medigoo Oy',
                    duration: 'May 2022 - September 2022',
                }}
                text="Over the summer in an internship where I did something completely new for the company
                website with wordpress and
                I developed their online store."
            />

            <p className={styles.title}>Education</p>
            <ResumeGridSection
                text=""
                title="Software Developer"
                gridSection={{
                    title: 'Helsinki Vocational College and Adult Institute',
                    location: 'Helsinki Finland',
                    duration: 'August 2021 - April 2023',
                }}
            />

            <p className={styles.title}>Skills</p>
            <ResumeGridSection
                wordSpacing="0.3rem"
                text="ReactJS, Typescript, Java, C languages, JavaScript, NextJS,
                React-Native, AWS, Flutter, Firebase, Assembly, Python, SQL, NodeJS, SEO and HTML5/CSS"
            />

            <p className={styles.title}>Contact information</p>
            <ResumeContact />
        </div>
    )
}

export default ResumeGrid
