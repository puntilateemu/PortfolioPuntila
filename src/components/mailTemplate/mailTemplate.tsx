interface mailTemplateProps {
    name: string
    email: string
    message: string
}

export const MailTemplate = ({ name, email, message }: mailTemplateProps) => {
    return (
        <div>
            <h1>Contact {name}!</h1>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>Message: {message}</p>
        </div>
    )
}
