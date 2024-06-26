import React from 'react';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Home from './pages/home/Home.jsx'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';
import "./App.scss"



const App = () => {
  const {authUser} = useAuthContext()
    return (
        <div>
           <Routes>
             <Route path='/' element={ authUser? <Home/> : <Navigate to="/login"/>}/>
             <Route path='/login' element={authUser? <Home/> : <Login/>}/>
             <Route path='/signup' element={ <SignUp/>}/>
           </Routes>
           <Toaster/>
        </div>
    );
};

export default App;