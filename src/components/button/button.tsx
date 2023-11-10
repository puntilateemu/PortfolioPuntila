import styles from './button.module.css'
import './button.module.css'
interface buttonProps {
    buttonStyle: 'fill' | 'empty'
    text: string
    miniApp?: boolean
}

const Button = ({ buttonStyle, text, miniApp }: buttonProps) => {
    console.log(buttonStyle)
    return (
        <div
            className={
                !miniApp
                    ? styles.container + ' ' + styles[buttonStyle]
                    : styles.containerMiniApp + ' ' + styles[buttonStyle]
            }
        >
            <p className={!miniApp ? styles.text : styles.textMiniApp}>
                {text}
            </p>
        </div>
    )
}

export default Button
