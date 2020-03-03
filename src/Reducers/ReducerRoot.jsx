import {combineReducers} from 'redux' 
import  ProductsReducer from './ReducerProduct';
import  ReducerSaveComponents from './ReducerSaveComponents'; 
import  ReducerSearch from './ReducerSearch'; 

const RootReducers =combineReducers({ ProductsReducer,ReducerSaveComponents,ReducerSearch });

export default RootReducers;