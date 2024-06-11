import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "./SignUp.scss"
import logo from '../../assets/logo/banter-box.png'

const SignUp = () => {
    const [form, setForm] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const { loading, signup } = useSignup()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(form)
        toast.success("Signup successful. You can now login")
    }

    return (
        <div className='signup'>
           <div>
             <img className='signup__logo' 
                 alt='signup page logo image'
                 src={logo}/>
           </div>
           <div className='signup__main'>
            <form className='signup__form' onSubmit={handleSubmit}>
               <div className='signup__name-div input-div'>
                    <label>Fullname</label>
                    <input type='text' 
                           placeholder='John Doe'
                           value={form.fullName}
                           onChange={(e) => setForm({...form, fullName: e.target.value})}
                    />
                </div>
                <div className='signup__username-div input-div'>
                    <label>Username</label>
                    <input type='text' 
                           placeholder='jhondoe'
                           value={form.username}
                           onChange={(e) => setForm({...form, username: e.target.value})}
                           />
                </div>
                <div className='signup__password-div input-div'>
                    <label>Password</label>
                    <input type='text' 
                           placeholder='Enter password'
                           value={form.password}
                           onChange={(e) => setForm({...form, password: e.target.value})}
                           />
                </div>
                <div className='signup__confirm-div input-div'>
                    <label>Confirm Password</label>
                    <input type='text' 
                           placeholder='Confirm password'
                           value={form.confirmPassword}
                           onChange={(e) => setForm({...form, confirmPassword: e.target.value})}
                           />
                </div>
                <div className='signup__button-div'>
                    <button type='submit'>Sign Up</button>
                </div>
                <Link className='signup__link' to="/login">Already have an account? <span className='signup__span-login'>Log In</span></Link>
            </form>
           </div>
        </div>
    );
};

export default SignUp;