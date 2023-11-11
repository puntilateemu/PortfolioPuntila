'use client'

import styles from './gridCard.module.css'
import fallbackImage from '../../../public/gridEmpty.jpg'
import Image from 'next/image'
import Button from '../button/button'
import Modal from '../modal/modal'
import { useState } from 'react'
const GridCard = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.bkImage}>
                    <Image
                        src={fallbackImage}
                        className={styles.image}
                        alt="grid-fallback"
                        quality={100}
                        sizes="100vw"
                    />
                </div>
                <div className={styles.infoContainer}>
                    <h3 className={styles.header}>Testi</h3>
                    <p className={styles.text}>Test</p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        buttonStyle="small"
                        text="View More"
                    />
                </div>
            </div>
            <Modal open={modalOpen} close={() => setModalOpen(false)} />
        </>
    )
}

export default GridCard
