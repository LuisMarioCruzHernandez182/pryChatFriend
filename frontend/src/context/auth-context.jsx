import { createContext, useContext, useState, useEffect } from "react";
import { login, verifyToken } from "../api/auth";
import Cookies from "js-cookie";

export const Authcontext= createContext();

export const useAuth= () =>{
    const context= useContext(Authcontext);

    if (!context ) throw new Error ("useAuth debe ser utilizado en el Authprovider");

    return context;
};

export const Authprovider = ({children} ) => {
    const [user, setUser]= useState();
    const [auth,setAuth]= useState(false);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState("");

    const loginAdmin = async(data)=>{
        
        try {
            const res= await login(data);
            if(res){
                setUser(res.data)
                setAuth(true)
                return res.data;
            }
        } catch (error) {
            setAuth(false)
            setError(error.response.data.message)
            setTimeout(() => {
                setError("")
            }, 2000);

            
        }
    }

    const verifyAuth= async()=>{
        const cookies= Cookies.get()
        console.log(Cookies.get())
        if(!cookies.token){
            setUser(null)
            setAuth(false)
            setLoading(false)
        }
        try {
            const res=await verifyToken()
            if (res) {
                setUser(res.data);
                setAuth(true);
                setLoading(false);
            } else {
                setLoading(false);
                setAuth(false);
                setUser(null);
            }
        } catch (error) {
            setUser(null);
            setAuth(false);
            setLoading(false);

        }
    }
    useEffect(()=>{
        verifyAuth()


    },[])

    const logout=()=>{
        Cookies.remove("token")
        setUser(null)
        setAuth(false)
    }
    return( 
        <Authcontext.Provider
        value={{
            loginAdmin,
            user,
            logout,
            auth,
            loading,
            error
        }}
        
        >
            {children}
        </Authcontext.Provider>
    )
}

