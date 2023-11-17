import styles from './inputField.module.css'

interface inputFieldProps {
    value: string | undefined
    onChange:
        | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined
    type?: string
    error: boolean
    name: string
    placeHolder: string
    textArea?: boolean
}

const InputField = ({
    value,
    onChange,
    type,
    name,
    placeHolder,
    textArea,
    error,
}: inputFieldProps) => {
    return (
        <>
            {textArea ? (
                <textarea
                    className={error ? styles.inputError : styles.input}
                    style={{
                        height: '10rem',
                    }}
                    name={name}
                    placeholder={
                        error ? placeHolder + ' is required' : placeHolder
                    }
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    className={error ? styles.inputError : styles.input}
                    type={type}
                    autoComplete={name}
                    name={name}
                    placeholder={
                        error ? placeHolder + ' is required' : placeHolder
                    }
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    )
}

export default InputField
