import styles from './button.module.css'
import './button.module.css'
import Link from 'next/link'
interface buttonProps {
    buttonStyle: 'fill' | 'empty' | 'small'
    text: string
    url?: string
    onClick?: () => void
    miniApp?: boolean
}

const Button = ({ buttonStyle, text, miniApp, onClick, url }: buttonProps) => {
    return (
        <>
            {url && !onClick ? (
                <Link href={url}>
                    <div
                        className={
                            !miniApp
                                ? styles.container + ' ' + styles[buttonStyle]
                                : styles.containerMiniApp +
                                  ' ' +
                                  styles[buttonStyle]
                        }
                    >
                        <p
                            className={
                                !miniApp ? styles.text : styles.textMiniApp
                            }
                        >
                            {text}
                        </p>
                    </div>
                </Link>
            ) : (
                <div
                    onClick={onClick}
                    className={
                        !miniApp
                            ? styles.container + ' ' + styles[buttonStyle]
                            : styles.containerMiniApp +
                              ' ' +
                              styles[buttonStyle]
                    }
                >
                    <p className={!miniApp ? styles.text : styles.textMiniApp}>
                        {text}
                    </p>
                </div>
            )}
        </>
    )
}

export default Button
