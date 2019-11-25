import {combineReducers} from 'redux';
import searchProcessReducer from './searchProcessReducer.js';
import dataItemsReducer from './dataItemsReducer.js';
import iconSelectedReducer from './iconSelectedReducer.js';
import selectorDisplayReducer from './selectorDisplayReducer.js';

const rootReducer = combineReducers({
  search: searchProcessReducer,
  data: dataItemsReducer,
  icon: iconSelectedReducer,
  selector:selectorDisplayReducer

})

export default rootReducer;
