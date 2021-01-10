import { combineReducers } from 'redux';
import iceCreamReducer from './iceCream/iceCreamReducer';
import cakeReducer from './cakes/cakeReducer';

const rootReducer = combineReducers({
	iceCreamReducer,
	cakeReducer
});

export default rootReducer;
