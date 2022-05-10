import AuthService from "../../services/AuthService";
import {getUser, isAuth, isNotAuth} from "../actions/userActions";
import {API_URL} from "../../http";
import axios from "axios";

export const THUNK_ACTION_LOGIN = (userData) => async (dispatch) => {
    try {
        const response = await AuthService.login(userData);
        dispatch(getUser(response.data.userFront));
    } catch (error) {
        console.log(error);
    }
};
export const THUNK_ACTION_LOGOUT = () => async (dispatch) => {
    try {
        await AuthService.logout();
        dispatch(isNotAuth());
    } catch (e) {
        console.log(e);
    } finally {
        window.location.href = "/";
    }
}

export const THUNK_checkAuth = () => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/refresh`, {
            withCredentials: true,
        })
        localStorage.setItem('token', response.data.accessToken)
        dispatch(getUser(response.data.userFront))
        dispatch(isAuth());
    } catch (e) {
        console.log(e)
    }
};
