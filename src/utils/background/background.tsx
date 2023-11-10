'use client'

import { usePathname } from 'next/navigation'
import styles from './background.module.css'
import { useEffect, useState } from 'react'

const Background = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const [initialState, setInitialState] = useState<boolean>(false)
    const [animation, setAnimation] = useState<string>()
    useEffect(() => {
        if (!initialState) {
            setInitialState(true)
            return
        }
        if (initialState) {
            !animation && setAnimation(styles.containerReveal)
            animation === styles.containerReveal
                ? setAnimation(styles.containerReavealReverse)
                : setAnimation(styles.containerReveal)
            return
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <div className={styles.containerInitial + ' ' + animation}>
            {children}
        </div>
    )
}

export default Background
