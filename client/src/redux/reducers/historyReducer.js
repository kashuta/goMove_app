import { initState } from "../initState";
import { ADD_HISTORY, GET_HISTORY } from "../types/histore.types";

export const historyReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_HISTORY:
      return action.payload
    case ADD_HISTORY:
      return action.payload
    default: return state
  }
}
