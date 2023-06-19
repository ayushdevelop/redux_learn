import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { createReducer } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

export const rootReducers = combineReducers({
  addOne: createReducer("ADD_ONE"),
  addTwo: createReducer("ADD_TWO"),
});

// composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducers, composeEnhancers());
