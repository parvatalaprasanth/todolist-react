import './App.css';
import Mainlist from './mainlist';
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const mystore=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
  return (
    <Provider store={mystore}>

    <Mainlist/>
      
    </Provider>
  );
}

export default App;
