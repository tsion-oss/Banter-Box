import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
   const [loading, setLoading ] =  useState(false)
   const { authUser, setAuthUser } = useAuthContext()

   const signup = async ({fullName, username, password, confirmPassword}) => {
     const success = handleInputErrors({fullName, username, password, confirmPassword})

     if(!success) return;

     setLoading(true)
     try{
        const res = await axios.post("http://localhost:8000/api/auth/signup", {
            fullName,
            username,
            password,
            confirmPassword
        },)

        if(res.data.error){
            throw new Error(res.data.error)
        }

       
        localStorage.setItem("banter-user", JSON.stringify(res.data))
      
        setAuthUser(res.data)

        console.log(res.data);

     }catch (error){
       toast.error(error.message)
     } finally {
        setLoading(false)
     }

   }
   return { loading, signup }
};

export default useSignup;

const handleInputErrors = ({fullName, username, password, confirmPassword}) => {
   if(!fullName || !username || !password || !confirmPassword) {
    toast.error("Please fill in all fields")
    return false
   }

   if(password !== confirmPassword) {
     toast.error("Passwords do not match")
     return false
   }

   if(password.length < 6) {
     toast.error("Password must be at least 6 characters")
     return false
   }

   return true
}