import { GET_TRUCK, GET_TRUCK_SUCCESS, GET_TRUCK_ERROR } from '../actions/AddActions'

const initialState = {
   trucks: { 
    Name: "",
    imageURL: "",
    cuisineType:"" },
    isFetching: false,
    error: "",
    success_message: ""
}


export const AddReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TRUCK:
            return {
                ...state.trucks,
                isFetching: true,
                error: "",
            };
            case GET_TRUCK_SUCCESS:
                return {
                    ...state.trucks,
                    trucks: action.payload,
                    isFetching: false,
                    error: '',
                    success_message: 'Truck has been added!'
                };
            case GET_TRUCK_ERROR:
                return{
                    ...state,
                    error: action.payload
                };
        default :
        return state
    }
};