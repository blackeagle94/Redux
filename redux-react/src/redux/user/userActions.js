import axios from 'axios';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';

export const fetchUSersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST
	};
};

export const fetchUSersSucces = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users
	};
};

export const fetchUSersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error
	};
};

export const fetchUsers = () => {
	return (dispatch) => {
		dispatch(fetchUSersRequest());
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				const users = response.data;
				dispatch(fetchUSersSucces(users));
			})
			.catch((error) => {
				const errorMessage = error.message;
				dispatch(fetchUSersFailure(errorMessage));
			});
	};
};
