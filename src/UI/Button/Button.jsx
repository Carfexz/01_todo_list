import styles from './Button.module.css'

const Button = () => {
    return (
        <div className={styles.button}>
            <div onClick={() => console.log('Работает!')} />
        </div>
    )
}

export default Button