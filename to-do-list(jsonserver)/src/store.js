import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import tasksReducer from './reducers/taskReducer';
import uiReducer from './reducers/uiReducer';

// Combine reducers
const rootReducer = combineReducers({
	tasks: tasksReducer,
	ui: uiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware and Redux DevTools
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
