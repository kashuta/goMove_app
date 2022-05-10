import axios from 'axios';
import { API_URL } from '../../http';
import { SET_USER } from '../types/Profile.types';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const getUserData = (id) => async (dispatch) => {
  axios.get(`${API_URL.getUser(id.id)}`)
    .then((response) => dispatch(setUser(response.data)));
};

export const updateUser = (inputs, id) => async (dispatch) => {
  const formData = new FormData();
  formData.append('file', inputs.file ?? inputs.photo);
  formData.append('name', inputs.name);
  formData.append('email', inputs.email);
  await fetch(`${API_URL.updateUser(id.id)}`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => dispatch(setUser(data)));
};
