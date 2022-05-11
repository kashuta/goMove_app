import {initState} from "../initState";
import { GET_COST_LIVING } from "../types/costLiving.types";

export const costLivingReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_COST_LIVING:
      return action.payload
      
      
  
    default: return state
  }
}
