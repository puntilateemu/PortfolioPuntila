import ContactForm from '../contactForm/contactForm'
import ContactInfo from '../contactInfo/contactInfo'
import styles from './contact.module.css'

interface contactProps {
    miniApp?: boolean
}

const Contact = ({ miniApp }: contactProps) => {
    return (
        <div
            className={miniApp ? styles.containerMiniApp : styles.container}
            id="Contact"
        >
            <ContactInfo miniApp={miniApp} />
            <ContactForm />
        </div>
    )
}

export default Contact
