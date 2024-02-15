import axios from 'axios'
import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from "./customerTypes"


const fetchUserRequest = ()=>{
    return{
        type:FETCH_USER_REQUEST
    };
};
const fetchUserSuccess = (users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    };
};
const fetchUserFailure = (error)=>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    };
};

export const fetchUsers = ()=>{
    return(dispatch)=>{
        dispatch(fetchUserRequest)
        return axios.get('http://localhost:5000/customers')
            .then((res)=>{
                dispatch(fetchUserSuccess(res.data))
            }).catch((err)=>{
                dispatch(fetchUserFailure(err.message))
            })
    }
}
