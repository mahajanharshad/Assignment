import { combineReducers } from 'redux';
import content from './reducers/Content';
import Flights from './reducers/Flights';
import Header from './reducers/Header';

export default combineReducers({
  content,
  Flights,
  Header
});
