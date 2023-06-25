import styles from './styles.module.scss'

export default function AuthForm({ children, ...props }) {
    return (
        <form
            className={styles['form']}
            {...props}
        >
            {children}
        </form>
    )
}
