import styles from './loadingSpinner.module.css'

const LoadingSpinner = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default LoadingSpinner
