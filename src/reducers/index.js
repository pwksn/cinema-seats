import seatsCounterReducer from './seatsCounter';
import seatsTogetherReducer from './areTogether';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    seatsCounter: seatsCounterReducer,
    seatsTogether: seatsTogetherReducer
});

export default allReducers;