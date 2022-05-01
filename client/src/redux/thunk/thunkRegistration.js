import AuthService from "../../services/AuthService";
import {getUser} from "../actions/userActions";

export const THUNK_ACTION_REGISTER = (userData) => async (dispatch) => {
    try {
        const response = await AuthService.registration(userData);
        console.log(response.data.userFront, 'lmapooooooo')
        dispatch(getUser(response.data.userFront));
    } catch (error) {
        console.log(error);
    }
};
