import styles from './contactInfo.module.css'

interface contactInfoProps {
    miniApp?: boolean
}

const ContactInfo = ({ miniApp }: contactInfoProps) => {
    return (
        <div className={miniApp ? styles.containerMiniApp : styles.container}>
            <div>
                <h3>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Contact me by email or via the form and I'll get back to
                    you.
                </h3>
            </div>
            <div className={miniApp ? styles.rowMiniApp : styles.row}>
                <h3>Email</h3>
                <h3 className={styles.text}>puntilateemu@gmail.com</h3>
            </div>
        </div>
    )
}

export default ContactInfo
