import {getCity} from "../actions/cityAction"
import axios from 'axios'

export const getCityFromDB = () => async (dispatch) => {
    const response = await axios.get("http://localhost:5001/api/price")
    console.log(response);
    dispatch(getCity(response.data))
}
