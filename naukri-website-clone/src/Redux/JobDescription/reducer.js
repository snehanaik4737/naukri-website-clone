import { actions } from "./actionTypes"

const inState ={
    isLoading: false,
   
    isError: false,
    jobs:{},
   
}

export const reducerJobDes = (state=inState,action)=>{ 

    switch(action.type){
        case actions.GET_JOB_REQUEST_BY_ID:{
            return{
                ...state,
                isLoading:true
            }
        }
        case actions.GET_JOB_SUCCESS_BY_ID:{
            return{
                ...state,
                isLoading:false,
                jobs:action.payload,
            }
        }
        case actions.GET_JOB_FAILURE_BY_ID:{
            return{
                ...state,
                isError:action.payload
            }
        }
        default:{
            return state;
        }
    }
}