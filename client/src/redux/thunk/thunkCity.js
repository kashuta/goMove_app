import {getCity} from "../actions/cityAction"
import axios from 'axios'

export const getCityFromDB = () => async (dispatch) => {
    const response = await axios.get("http://localhost:5001/api/city")

    dispatch(getCity(response.data))
}
