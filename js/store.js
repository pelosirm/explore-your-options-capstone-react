import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {exploreReducer} from './reducers';
import { reducer as formReducer } from 'redux-form';

const store = createStore(combineReducers({ form : formReducer, exploreReducer}), applyMiddleware(thunk,logger));

export default store 
