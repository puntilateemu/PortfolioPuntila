'use client'

import styles from './gridCard.module.css'
import Image from 'next/image'
import Button from '../button/button'
import Modal from '../modal/modal'
import { useState } from 'react'
import { portfolio } from '@/types/portfolio'

const GridCard = (portfolio: portfolio) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <>
            <div
                className={
                    portfolio.miniApp
                        ? styles.containerMiniApp
                        : styles.container
                }
            >
                <div
                    className={
                        portfolio.miniApp
                            ? styles.bkImageMiniApp
                            : styles.bkImage
                    }
                >
                    <Image
                        src={portfolio.imageFront}
                        className={styles.image}
                        style={{ objectFit: portfolio.objectFit }}
                        alt={`${portfolio.title}-image`}
                        quality={100}
                    />
                </div>
                <div
                    className={
                        portfolio.miniApp
                            ? styles.infoContainerMiniApp
                            : styles.infoContainer
                    }
                >
                    <h3 className={styles.header}>{portfolio.title}</h3>
                    <p className={styles.text}>{portfolio.introText}</p>
                    <Button
                        onClick={() => setModalOpen(true)}
                        buttonStyle="small"
                        text="View More"
                    />
                </div>
            </div>

            <Modal
                portfolio={portfolio}
                open={modalOpen}
                close={() => setModalOpen(false)}
            />
        </>
    )
}

export default GridCard
