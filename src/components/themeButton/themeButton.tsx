'use client'

import Image from 'next/image'
import { useContext, useState } from 'react'
import styles from './themeButton.module.css'
import { ThemeContext } from '@/state/context/theme'
import { Types } from '@/state/reducer/theme'
import darkMode from '../../../public/darkMode.svg'
import lightMode from '../../../public/lightMode.svg'
const ThemeButton = () => {
    const { state, dispatch } = useContext(ThemeContext)
    const [transition, setTransition] = useState(styles.img)
    const [currentIcon, setCurrentIcon] = useState(
        state.theme === 'dark' ? darkMode : lightMode
    )
    return (
        <div
            className={styles.container}
            onClick={() => {
                dispatch({
                    type: Types.Change,
                    payload: {
                        theme: state.theme === 'dark' ? 'light' : 'dark',
                    },
                })
                setTransition(styles.imgNotActive)
                setTimeout(() => {
                    setTransition(styles.img)
                    setCurrentIcon(
                        currentIcon === darkMode ? lightMode : darkMode
                    )
                }, 500)
            }}
        >
            <Image
                src={currentIcon}
                alt="light-mode-icon"
                className={transition}
                width={180}
                height={180}
            />
        </div>
    )
}

export default ThemeButton
