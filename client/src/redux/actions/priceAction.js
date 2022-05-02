import {GET_PRICE} from "../types/price.types";

export const getPrice = (getPriceCountry) => ({
    type: GET_PRICE,
    payload: getPriceCountry
})
