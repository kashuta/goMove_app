import axios from 'axios';
import {getUser} from '../actions/userActions';

export const getUserData = (id) => async (dispatch) => {
    axios.get(`http://localhost:5001/api/userprofile/${id}`)
        .then((response) => dispatch(getUser(response.data)));
};

export const updateUser = (inputs, id) => async (dispatch) => {
    const formData = new FormData();
    formData.append("file", inputs.file ?? inputs.photo);
    formData.append('userId', inputs.id);
    formData.append('name', inputs.name);
    formData.append('email', inputs.email);
    await fetch(`http://localhost:5001/api/userprofile/${inputs.id}`, {
        method: 'PATCH',
        credentials: 'include',
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => dispatch(getUser(data)));
};
