import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

export const initialStore = (initialState = {}) => {
  return createStore(RootReducer, initialState, applyMiddleware(thunk));
};