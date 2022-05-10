import axios from 'axios'
import { ACTION_ADD_HISTORY, ACTION_GET_HISTORY } from '../actions/historyAction';

export const getHistoryFromDB = () => async (dispatch) => {
  const response = await axios.get("http://localhost:5001/api/history/:id");
  dispatch(ACTION_GET_HISTORY(response.data))
}

export const addHistoryFromDB = ({ cityBegin, cityEnd }) => async (dispatch) => {
  const response = await axios.post('http://localhost:5001/api/history', {cityBegin, cityEnd})
  dispatch(ACTION_ADD_HISTORY(response.data))
}
