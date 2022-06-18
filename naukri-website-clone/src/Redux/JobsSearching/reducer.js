import { actions } from "./action"

const initState = {
    jobs: [],
    isLoading: false,
    isError:"",
   
}

export const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.JOB_SEARCH_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: ""
            }
        }

        case actions.JOB_SEARCH_SUCCESS: {
            console.log("action.payload",action.payload)
            return {
                ...state,
                isLoading: false,
                jobs: action.payload,
               
            }
        }

        case actions.JOB_SEARCH_FAILURE: {
            return {
                ...state,
                isError: action.payload,
                isLoading: false
            }
        }

        default: return state
    }
}