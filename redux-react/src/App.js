import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import ClassCounterOne from './Hooks/useEffect/ClassCounterOne';
import HookCounterOne from './Hooks/useEffect/HookCounterOne';


function App() {
	return (
		<div className="App">
		{/* <ClassCounterOne /> */}
		<HookCounterOne />
			{/* 
				Redux Components
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
