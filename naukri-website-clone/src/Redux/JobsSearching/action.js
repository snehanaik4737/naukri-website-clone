
import axios from'axios'
export const actions={
     JOB_SEARCH_REQUEST:"JOBL_SEARCH_REQUEST",
     JOB_SEARCH_SUCCESS:"JOB_SEARCH_SUCCESS",
     JOB_SEARCH_FAILURE:"JOB_SEARCH_FAILURE"


}

export const getJobRequest = () => {
    return {
        type: actions.JOB_SEARCH_REQUEST
    }
}

export const getJobSuccess = (payload) => {
    return {
        type:actions.JOB_SEARCH_SUCCESS,
        payload,
    }
}

export const getJobFailure = (err) => {
    return {
        type:actions.JOB_SEARCH_FAILURE,
        payload:err
    }
}


 const getJobs = (param) => (dispatch) => {
    dispatch(getJobRequest())

    axios({
        url:'https://json-server-vedanshw.herokuapp.com/naukri',
        method:'GET',
        params:{
          q:param
        }
    })
   
    .then((res)=>dispatch(getJobSuccess(res.data)))

    .catch((err)=>dispatch(getJobFailure(err)))

    // if (job !== '' && location !== '') {
    //     return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
    //         params: {
    //             q: job,
    //             location: location
    //         }
    //     })
    //         .then(res => dispatch(getJobSuccess(res.data)))
    //         .catch(err => dispatch(getJobFailure()))
    // }
    // else if (job !== '' && location === '') {
    //     return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
    //         params: {
    //             q: job
    //         }
    //     })
    //         .then(res => dispatch(getJobSuccess(res.data)))
    //         .catch(err => dispatch(getJobFailure()))
    // }
}



 const getJobsByLocation = (job,loc1) => (dispatch) => {
  
    console.log("params",job,loc1)
    dispatch(getJobRequest())

    if (loc1 !== '') {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                 ...loc1
                    
              
            }
        })
            .then((res) => dispatch(getJobSuccess(res.data)))
            .catch((err) => dispatch(getJobFailure(err)))
    } else {
        return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job
            }
        })
            .then((res) => dispatch(getJobSuccess(res.data)))
            .catch((err) => dispatch(getJobFailure(err)))
    }
}


export {getJobs,getJobsByLocation}