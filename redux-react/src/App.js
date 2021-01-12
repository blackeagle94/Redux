import React, { useReducer } from 'react';

import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import ParentComponent from './Hooks/useCallback/ParentComponent';
import Counter from './Hooks/useMemo/Counter';
import DataFetchingOne from './Hooks/useReducer/fetching data with useReducer/DataFetchingOne';
import DataFetchingTwo from './Hooks/useReducer/fetching data with useReducer/DataFetchingTwo';
import ClassTimer from './Hooks/useRef/ClassTimer';
import FOcusInput from './Hooks/useRef/FocusInput';
import HookTimer from './Hooks/useRef/HookTimer';


// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

/*export const CountContext = React.createContext();

const initialState = 0;
const reducer = (curentState, action) => {
	switch (action) {
		case 'increment':
			return curentState + 1;
		case 'decrement':
			return curentState - 1;
		case 'reset':
			return initialState;
		default:
			return curentState;
	}
}; */

function App() {
	/* const [ count, dispatch ] = useReducer(reducer, initialState); */
	return (
		<div className="App">
		{/* <FOcusInput /> */}
		<ClassTimer />
		<HookTimer />
			{/* Count - {count}
			<CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</CountContext.Provider> */}
			{/* <UserContext.Provider value={'ismail'}>
				<ChannelContext.Provider value={'code'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
			{/* Redux Components
			<ItemContainer cake />
			<ItemContainer />
			<CakeContainer />
			<HooksCakeContainer />
			<IceCreamContainer />
			<NewCakeContainer />
			<UserContainer /> */}
		</div>
	);
}

export default App;
