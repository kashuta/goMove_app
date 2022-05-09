import { CHANGE_CURRENCY, GET_CURRENCY } from "../types/currency.types";
import { SET_CURRENCY } from "../types/price.types";



export const getCurrency = (currencyFrom) => ({
  type: GET_CURRENCY,
  payload : currencyFrom
})


export const changeCurrency = (data) => ({
  type: CHANGE_CURRENCY,
  payload: data
})


export const setCurrency = (data) => ({
  type: SET_CURRENCY,
  payload: data
})
