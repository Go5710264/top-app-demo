import styles from './Logotype.module.scss';

const Logotype = () => {
    return (
        <input className={styles.search}>
            <img src='/logotype.svg' alt="TVOЁ" />
        </input>
    )
}

export default Logotype;