import TextInput from '../../components/TextInput/TextInput'
import styles from './Login.module.css'
import loginSchema from '../../schemas/loginSchema'
import { useFormik } from 'formik'
import { login } from '../../api/internal'
import { setUser } from '../../store/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [error, setError] = useState('')

    const handleLogin = async () => {
        const data = {
            username: values.username,
            password: values.password
        };
        const response = await login(data);

        if (response.status === 200){
            // 1. setUser update
            const user = {
                _id: response.data.user._id,
                email: response.data.user.email,
                username: response.data.user.username,
                auth: response.data.auth
            };

            dispatch(setUser(user));
            // 2. redirect homepage
            navigate('/')
        }

        else if (response.code === "ERR_BAD_REQUEST") {
          // display error message
          setError(response.response.data.message);
        } 
    }

    const {values, touched, handleBlur, handleChange, errors} = useFormik({
        initialValues: {
            username: '',
            password: '',
        },

        validationSchema: loginSchema
    });
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginHeader}>Log in to your account</div>
      <TextInput 
      type="text" 
      values={values.username} 
      name="username" 
      onBlur={handleBlur} 
      onChange={handleChange} 
      placeholder="username" 
      error={errors.username && touched.username ? 1 : undefined} 
      errormessage={errors.username} />
      <TextInput 
      type="password" 
      name="password" 
      value={values.password} 
      onBlur={handleBlur} 
      onChange={handleChange} 
      placeholder="password" 
      error={errors.password && touched.password ? 1 : undefined} 
      errormessage={errors.password} />
      <button disabled={!values.username || !values.password || errors.username || errors.password} 
      className={styles.logInButton} 
      onClick={handleLogin}>
        Log In
      </button>
      <div>Don't have an account? 
        <span className={styles.createAccount} onClick={() => navigate('/signup')}>Register</span>
      </div>
      {error != "" ? <p className={styles.errorMessage}>{error}</p> : ""}
    </div>
  )
}

export default Login


