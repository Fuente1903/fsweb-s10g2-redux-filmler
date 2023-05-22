import { combineReducers } from 'redux';

import movieReducer from './movieReducer';




console.log(movieReducer);
const rootReducer = combineReducers({
    movie: movieReducer,
});





export default movieReducer;