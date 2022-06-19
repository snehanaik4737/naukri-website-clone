
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

    
}



 const getJobsByLocation = (job,loc1) => (dispatch) => {
  
    console.log("params",job,loc1)
    dispatch(getJobRequest())

    if (loc1 !== '') {
        axios({
            url:'https://json-server-vedanshw.herokuapp.com/naukri',
            method:'GET',
            params:{
              q:job,
              ...loc1
            }
        })
            .then((res) => dispatch(getJobSuccess(res.data)))
            .catch((err) => dispatch(getJobFailure(err)))
    } else {
        axios({
            url:'https://json-server-vedanshw.herokuapp.com/naukri',
            method:'GET',
            params:{
              q:job,
             
            }
        })
            .then((res) => dispatch(getJobSuccess(res.data)))
            .catch((err) => dispatch(getJobFailure(err)))
    }
}

 const getJobsBySalary = (job, num) => (dispatch) => {
    var gte; var lte
    if (num === 0) { gte = 5000; lte = 30000 }
    else if (num === 3) { gte = 30000; lte = 60000 }
    else if (num === 6) { gte = 60000; lte = 100000 }
    else if (num === 10) { gte = 100000; lte = 150000 }

    dispatch(getJobRequest())

    // if (location !== '') {
         axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
            params: {
                q: job,
                salary_gte: gte,
                salary_lte: lte,
                // ...loc1
            }
        })
            .then(res => dispatch(getJobSuccess(res.data)))
            .catch(err => dispatch(getJobFailure()))
    // }
    // else {
    //     return axios.get('https://json-server-vedanshw.herokuapp.com/naukri', {
    //         params: {
    //             q: job,
    //             salary_gte: gte,
    //             salary_lte: lte
    //         }
    //     })
    //         .then(res => dispatch(getJobSuccess(res.data)))
    //         .catch(err => dispatch(getJobFailure()))
    // }
}

export {getJobs,getJobsByLocation,getJobsBySalary}