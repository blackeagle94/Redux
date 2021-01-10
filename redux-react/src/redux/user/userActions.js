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
