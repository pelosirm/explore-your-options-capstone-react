import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import {exploreReducer} from './reducers';

export default createStore(exploreReducer, applyMiddleware(thunk));