import { createContext, useState } from "react";


export const AuthContext=createContext();


const ContextProvider=({children})=>{

    const [state,setState]=useState(true);

    return(
        <AuthContext.Provider value={{state,setState}} >
        {children}
        </AuthContext.Provider>
    )
}

export default ContextProvider