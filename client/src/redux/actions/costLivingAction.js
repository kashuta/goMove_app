
import { GET_COST_LIVING } from "../types/costLiving.types";


export const getCostLiving = (getCostLivingFrom) => ({
  type: GET_COST_LIVING,
  payload : getCostLivingFrom
})
