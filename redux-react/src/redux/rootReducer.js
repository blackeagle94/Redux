import { combineReducers } from 'redux';
import iceCreamReducer from './iceCream/iceCreamReducer';
import cakeReducer from './cakes/cakeReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
	iceCream: iceCreamReducer,
	cake: cakeReducer,
	user: userReducer
});

export default rootReducer;
