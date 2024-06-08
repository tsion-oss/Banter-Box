import React, { useState } from 'react';
import "./Login.scss"
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [form, setForm ] = useState({
        username: '',
        password: ''
    })

    const { loading, login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(form)
    }
    return (
        <div className='login'>
           <div>
            <h1>Banter Box</h1>
            <form onSubmit={handleSubmit}>
               <div>
                    <label>Username</label>
                    <input type='text' 
                           placeholder='Enter username'
                           value={form.username}
                           onChange={(e) => setForm({...form, username: e.target.value})}
                           />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' 
                           placeholder='Enter password'
                           value={form.password}
                           onChange={(e) => setForm({...form, password: e.target.value})}/>
                </div>
                <Link to="/signup">Don't have an account?</Link>

                <div>
                    <button>Login</button>
                </div>
            </form>
           </div>
        </div>
    );
};

export default Login;