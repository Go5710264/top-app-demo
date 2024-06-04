import styles from './Logotype.module.scss';

// TODO: доработать. Добавить логотип внутрь компонента
export const Logotype = () => {
    return (
        <div className={styles.logotype}>
            <img className={styles.logotype__img} src='/logotype.svg' alt="TVOЁ" />
        </div>
    );
}