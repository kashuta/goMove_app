import { initState } from "../initState"
import { SET_CURRENCY } from "../types/price.types"



export const setCurrencyReducer = (state=initState, action) => {
  switch (action.type) {
    case SET_CURRENCY:
      return action.payload
      
      
  
    default: return state
  }
}


