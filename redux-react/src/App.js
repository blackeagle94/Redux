import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <div className="App">
    <ItemContainer cake />
    <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
    </div>
  );
}

export default App;
