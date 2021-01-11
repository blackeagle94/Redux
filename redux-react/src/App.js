import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import ClassCounter from './Hooks/components/ClassCounter';
import HookCounter from './Hooks/components/HookCounter';
import HookCounter2 from './Hooks/components/HookCounter2';
import HookCounter4 from './Hooks/components/HookCounter4';

function App() {
	return (
		<div className="App">
			<HookCounter4 />
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
