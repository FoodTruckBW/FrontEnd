import { axiosWithAuth } from '../utils/axiosWithAuth'

export const ADD_TRUCK = 'ADD_TRUCK'
export const ADD_TRUCK_SUCCESS = 'ADD_TRUCK_SUCCESS'
export const ADD_TRUCK_ERROR = 'ADD_TRUCK_ERROR'

export const addTruck = (data) => {
    return (dispatch) => {
        dispatch ({ type : ADD_TRUCK })

        axiosWithAuth
        .post("http://foodtruck-tracker-bw.herokuapp.com/api/trucks", data)
        .then((res) => {
            dispatch({ type: ADD_TRUCK_SUCCESS , payload : res.data })
        })
        .catch((error) => {
            dispatch({ type: ADD_TRUCK_ERROR , payload : error.message })
        })
    };
};