import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//context to access values
const AppContext = createContext();


//provider
export const AppProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(

        //parse convert json data in java script
        
         JSON.parse(sessionStorage.getItem('user'))
        );

    const [LoggedIn, setLoggedIn] = useState(currentUser !== null);
    const navigate= useNavigate();
    //state created, login- true ,logout -false 

    const logout= ()=>{
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/login');
    }
    return (
        <AppContext.Provider  value={{LoggedIn,setLoggedIn,logout}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;