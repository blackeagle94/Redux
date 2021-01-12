import React, { useReducer } from 'react';

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
};

function CounterThree() {
	const [ count, dispatch ] = useReducer(reducer, initialState);
	const [ countTwo, dispatchTwo ] = useReducer(reducer, initialState);
	return (
		<div>
			<div>Cout - {count}</div>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
            <div>
            <div>Cout Two - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
			<button onClick={() => dispatchTwo('decrement')}>Decrement</button>
			<button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
		</div>
	);
}

export default CounterThree;
