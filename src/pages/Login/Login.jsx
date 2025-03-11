import TextInput from '../../components/TextInput/TextInput'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginHeader}>Log in to your account</div>
      <TextInput />
      <TextInput />
      <button></button>
      <span>Don't have an account? <button>Register</button></span>
    </div>
  )
}

export default Login
