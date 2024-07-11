import { createContext, useContext, useState, useEffect } from "react";
import { login } from "../api/auth";

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
            console.log(error.response)
            
        }
    }
    return( 
        <Authcontext.Provider
        value={{
            loginAdmin,
            user
        }}
        
        >
            {children}
        </Authcontext.Provider>
    )
}

