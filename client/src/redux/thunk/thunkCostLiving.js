import axios from 'axios'
import { getCostLiving } from "../actions/costLivingAction"

export const getCostLivingFromBD = () => async (dispatch) => {
    const response = await axios.get("http://localhost:5001/api/costLiving")

    dispatch(getCostLiving(response.data))
}
