import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,useLocation} from "react-router-dom"
export const PrivateRoute = ({children}) => {
   const auth =useSelector((store)=>store.auth);

   const location =useLocation();
   console.log(auth); 
   if(auth.isLogin){
    return children
   }
   else if(auth.isAuth){
    return children
   }
  
  return (
   <Navigate to="/" state={location} replace={true}></Navigate>
  )
}
