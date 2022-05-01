import {initState} from "../initState";
import {GET_USER} from "../types/User.types";

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USER:
            console.log(action.payload, 'reducer');
            return action.payload

        default:
            return state
    }
}