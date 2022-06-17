
import { actions } from "./action";

const initState={
    isLogin:false,
    token:"",
    isAuth:false,
    message:"",
    isError:false,
    isLoading:true,
    username:(localStorage.getItem("name")|| "")
}


export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case actions.LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }
        case actions.LOGIN_SUCCESS:{
            return {
                ...state,
                isLogin:true,
                token:action.payload
            }

        }
        case actions.LOGIN_FAILURE:{
            return {
                ...state,
                isLogin:false,
                isError:true
            }
        }

        case actions.REGISTER_REQUEST:{
            return {
                ...state,
                isLoading:true
            }
        }

        case actions.REGISTER_SUCCESS:{
            localStorage.setItem("name",action.payload.name)
            console.log("payload",action.payload)
            return {
                ...state,
                isAuth:true,
                message:action.payload.data,
                username:action.payload.name
            }

        }
        case actions.REGISTER_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isError:true
            }
        }

        default: 
        return state;
    }
}







