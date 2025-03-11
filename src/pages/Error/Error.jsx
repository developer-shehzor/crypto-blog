import styles from "./Error.module.css"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorHeader}>
        Error 404 - Page not found
        <div className={styles.erroBody}>Go back to 
            <Link to='/' className={styles.homeLink}>home</Link>
        </div>
      </div>
    </div>
  )
}

export default Error
