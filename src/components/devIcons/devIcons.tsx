import styles from './devIcons.module.css'
import Image from 'next/image'
import expressIcon from '../../../public/express-original.svg'
import linuxIcon from '../../../public/linux.svg'
import mariadbIcon from '../../../public/mariadb.svg'
import nextjsIcon from '../../../public/next-js.svg'
import nodejsIcon from '../../../public/nodejs.svg'
import reactIcon from '../../../public/react.svg'
import reactNativeIcon from '../../../public/sdk-react-native.svg'
import typescriptIcon from '../../../public/typescript.svg'
import Tooltip from '../tooltip/tooltip'
import { devIcons } from '@/types/devIcons'

interface devIconsProps {
    devIcons: devIcons
}

const DevIcons = ({ devIcons }: devIconsProps) => {
    return (
        <div className={styles.container}>
            {devIcons?.express && (
                <Tooltip text="Express">
                    <Image
                        className={styles.icon}
                        src={expressIcon}
                        alt={`express-icon`}
                    />
                </Tooltip>
            )}
            {devIcons?.linux && (
                <Tooltip text="Linux">
                    <Image
                        className={styles.icon}
                        src={linuxIcon}
                        alt={`linux-icon`}
                    />
                </Tooltip>
            )}
            {devIcons?.mariadb && (
                <Tooltip text="MariaDB">
                    <Image
                        className={styles.icon}
                        src={mariadbIcon}
                        alt={`mariadb-icon`}
                    />
                </Tooltip>
            )}
            {devIcons?.nextjs && (
                <Tooltip text="NextJS">
                    <Image
                        className={styles.icon}
                        src={nextjsIcon}
                        alt={`nextjs-icon`}
                    />
                </Tooltip>
            )}
            {devIcons?.nodejs && (
                <Tooltip text="NodeJS">
                    <Image
                        className={styles.icon}
                        src={nodejsIcon}
                        alt={`nodejs-icon`}
                    />
                </Tooltip>
            )}
            {devIcons?.react && (
                <Tooltip text="React">
                    <Image
                        className={styles.icon}
                        src={reactIcon}
                        alt={`react-icon`}
                    />
                </Tooltip>
            )}
            {devIcons?.reactNative && (
                <Tooltip text="React-Native">
                    <Image
                        className={styles.icon}
                        src={reactNativeIcon}
                        alt={`reactNative-icon`}
                    />
                </Tooltip>
            )}
            {devIcons?.typescript && (
                <Tooltip text="Typescript">
                    <Image
                        className={styles.icon}
                        src={typescriptIcon}
                        alt={`typescript-icon`}
                    />
                </Tooltip>
            )}
        </div>
    )
}

export default DevIcons
