import {getPrice} from "../actions/priceAction";
import axios from 'axios'

export const getPriceFromDB = ({city, country}) => async (dispatch) => {
    const response = await axios.post("http://localhost:5001/api/price", {city, country})
    dispatch(getPrice(response.data))
}
