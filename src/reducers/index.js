import {combineReducers} from 'redux';
import listREducer from './listreducer';
import contentREducer from './contentreducer';
import infoREducer from './inforeducer';



const allReducers=combineReducers({
    list:listREducer,
    content:contentREducer,
    info:infoREducer

});


export default allReducers;