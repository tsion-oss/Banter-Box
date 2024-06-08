import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [form, setForm] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const { loading, signup } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(form)
    }

    return (
        <div className='signup'>
           <div>
            <h1>Sign Up <span>Banter Box</span></h1>
            <form onSubmit={handleSubmit}>
               <div>
                    <label>Fullname</label>
                    <input type='text' 
                           placeholder='John Doe'
                           value={form.fullName}
                           onChange={(e) => setForm({...form, fullName: e.target.value})}
                    />
                </div>
                <div>
                    <label>Username</label>
                    <input type='text' 
                           placeholder='jhondoe'
                           value={form.username}
                           onChange={(e) => setForm({...form, username: e.target.value})}
                           />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' 
                           placeholder='Enter password'
                           value={form.password}
                           onChange={(e) => setForm({...form, password: e.target.value})}
                           />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type='text' 
                           placeholder='Confirm password'
                           value={form.confirmPassword}
                           onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                           />
                </div>
                <Link to="/login">Already have an account?</Link>

                <div>
                    <button>Sign Up</button>
                </div>
            </form>
           </div>
        </div>
    );
};

export default SignUp;