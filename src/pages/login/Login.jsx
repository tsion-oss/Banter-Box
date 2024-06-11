import React, { useState } from 'react';
import "./Login.scss"
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import logo from '../../assets/logo/banter-box.png'

const Login = () => {
    const [form, setForm ] = useState({
        username: '',
        password: ''
    })

    const { login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(form)
    }
    return (
        <div className='login'>
            <img alt='login logo image'
                 src={logo}/>
           <div className='login__main-div'>
            <h1>Log In</h1>
            <form className='login__form' onSubmit={handleSubmit}>
               <div className='login__user-div input-div'>
                    <label>Username</label>
                    <input type='text' 
                           placeholder='Enter username'
                           value={form.username}
                           onChange={(e) => setForm({...form, username: e.target.value})}
                           />
                </div>
                <div className='login__password-div input-div'>
                    <label>Password</label>
                    <input type='text' 
                           placeholder='Enter password'
                           value={form.password}
                           onChange={(e) => setForm({...form, password: e.target.value})}/>
                </div>
                

                <div className='login__button-div'>
                    <button type='submit'>Login</button>
                </div>
                <Link className='login__link' to="/signup">Don't have an account? <span className='signup__span-signup'>Sign Up</span></Link>
            </form>
           </div>
        </div>
    );
};

export default Login;