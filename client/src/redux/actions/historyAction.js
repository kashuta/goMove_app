import { ADD_HISTORY, GET_HISTORY } from "../types/histore.types"

export const ACTION_GET_HISTORY = (city) => {
  return {
    type: GET_HISTORY,
    payload: city
  }
}

export const ACTION_ADD_HISTORY = (city) => {
  return {
    type: ADD_HISTORY,
    payload: city
  }
}
