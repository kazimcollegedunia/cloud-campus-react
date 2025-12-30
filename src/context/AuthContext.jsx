import { createContext, useContext, useEffect, useState,useRef } from "react";
import Api from '../services/api';
import {getAccessToken} from "../auth/token";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({}); // 🔑 dynamic now
  const [accessToken, setAccessToken] = useState(null);
  let is_token = getAccessToken();

    const callUserApiMe  = async ()  =>  {
        const res = await Api.get("/auth/me");
        // console.log("Response:" ,res.data.data);
        if(res.status){
            setUser(res.data);
        }
    }

  const hasFetchedRef = useRef(false);

        useEffect(() => {
             
        if (is_token && !user?.role && !hasFetchedRef.current) {
            hasFetchedRef.current = true;
            callUserApiMe();
        }
        }, [is_token, user?.role]);



  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
