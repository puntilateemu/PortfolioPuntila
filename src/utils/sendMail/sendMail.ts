import { FormEvent } from 'react'

export type formItems = {
    name: string
    email: string
    message: string
}

export const sendMail = async (
    e: FormEvent<HTMLFormElement>,
    formItems: formItems
) => {
    e.preventDefault()
    const test = await fetch('/api/mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            name: formItems.name,
            email: formItems.email,
            message: formItems.message,
        }),
    })
    return test.ok
}
