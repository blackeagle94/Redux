import React, { useReducer } from 'react';

const initialState = {
	firstCounter: 0,
	secondCounter: 10
};
const reducer = (curentState, action) => {
	switch (action.type) {
		case 'increment':
			return {...curentState, firstCounter: curentState.firstCounter + action.value };
		case 'decrement':
			return {...curentState, firstCounter: curentState.firstCounter - action.value };
		case 'increment2':
			return {...curentState, secondCounter: curentState.secondCounter + action.value };
		case 'decrement2':
			return {...curentState, secondCounter: curentState.secondCounter - action.value };
		case 'reset':
			return initialState;
		default:
			return curentState;
	}
};

function CounterTwo() {
	const [ count, dispatch ] = useReducer(reducer, initialState);
	return (
		<div>
			<div>First Counter - {count.firstCounter}</div>
			<div>Second Counter - {count.secondCounter}</div>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter Two</button>
			<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter Two</button>
            </div>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</div>
	);
}

export default CounterTwo;
