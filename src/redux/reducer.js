import { combineReducers } from 'redux';
import { contactReducer } from './slice';

export const reducer = combineReducers({
  phoneBook: contactReducer,
});
