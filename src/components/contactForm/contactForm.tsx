'use client'

import { FormEvent, useState } from 'react'
import styles from './contactForm.module.css'
import { formItems, sendMail } from '@/utils/sendMail/sendMail'
import InputField from '../inputField/inputField'
import LoadingSpinner from '../loadingSpinner/loadingSpinner'

const ContactForm = () => {
    const [name, setName] = useState({ value: '', error: false })
    const [email, setEmail] = useState({ value: '', error: false })
    const [message, setMessage] = useState({ value: '', error: false })
    const [button, setButton] = useState('Send Message')
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = async (
        e: FormEvent<HTMLFormElement>,
        { name, email, message }: formItems
    ) => {
        e.preventDefault()

        !name && setName({ value: '', error: true })
        !email && setEmail({ value: '', error: true })
        !message && setMessage({ value: '', error: true })

        if (name && email && message && button === 'Send Message') {
            setIsLoading(true)
            const response = await sendMail(e, { name, email, message })
            if (response) {
                setName({ value: '', error: false })
                setEmail({ value: '', error: false })
                setMessage({ value: '', error: false })
                setIsLoading(false)
                setButton('Success!')
                return
            } else {
                setIsLoading(false)
                console.log('error')
                return
            }
        } else {
            return
        }
    }
    return (
        <form
            className={styles.container}
            onSubmit={(e) =>
                onSubmit(e, {
                    name: name.value,
                    email: email.value,
                    message: message.value,
                })
            }
        >
            <InputField
                type="text"
                name="name"
                placeHolder="Name"
                value={name.value}
                onChange={(e) =>
                    setName({ value: e.currentTarget.value, error: false })
                }
                error={name.error}
            />
            <InputField
                type="text"
                name="email"
                placeHolder="Email"
                value={email.value}
                onChange={(e) =>
                    setEmail({ value: e.currentTarget.value, error: false })
                }
                error={email.error}
            />
            <InputField
                textArea
                name="message"
                placeHolder="Message"
                value={message.value}
                onChange={(e) =>
                    setMessage({ value: e.currentTarget.value, error: false })
                }
                error={message.error}
            />
            <button className={styles.button} type="submit">
                {isLoading ? <LoadingSpinner /> : button}
            </button>
        </form>
    )
}

export default ContactForm
