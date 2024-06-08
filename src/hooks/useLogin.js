import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

const useLogin = () => {
  
    const [loading, setLoading] = useState(false)
    const {setAuthUser } = useAuthContext()

    const login = async ({ username, password }) => {
        const sucess = handleInputErrors(username, password)
        if(!sucess) return;
        setLoading(true)
        try{
            const res = await axios.post("http://localhost:8000/api/auth/login", {
                username, password}, {
                headers: {"Content-Type": "application/json"},
                withCredentials: true
            })
        
            

            if(res.data.error){
                throw new Error(res.data.error)
            }

          
            localStorage.setItem("banter-user", JSON.stringify(res.data))
            setAuthUser(res.data)
        } catch (error){
           toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading, login}
};

export default useLogin;

function handleInputErrors(username, password) {
    if(!username || !password){
        toast.error("Please fill in all fields")
        return false
    }
    return true
}