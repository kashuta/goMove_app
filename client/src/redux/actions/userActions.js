import {GET_USER, IS_AUTH, IS_NOT_AUTH, UNSET_USER} from "../types/User.types";

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
};
export const unsetUser = () => ({type: UNSET_USER})
export const isAuth = () => ({type: IS_AUTH})
export const isNotAuth = () => ({type: IS_NOT_AUTH})


