import logo from '../assets/logo.png'
import styles from './Header.module.css'

export default function Header(){
    return (
        <div className={styles.headerContainerDiv}>
            <img className={styles.logo} src={logo} alt="Valencia" />
        </div>
    )
}