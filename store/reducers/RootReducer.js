import AuthReducer from './AuthReducer';
import ConfigReducer from './ConfigReducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    authentification : AuthReducer,
    config : ConfigReducer
})

export default RootReducer;