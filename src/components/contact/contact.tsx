import ContactForm from '../contactForm/contactForm'
import ContactInfo from '../contactInfo/contactInfo'
import styles from './contact.module.css'

const Contact = () => {
    return (
        <div className={styles.container} id="Contact">
            <ContactInfo />
            <ContactForm />
        </div>
    )
}

export default Contact
