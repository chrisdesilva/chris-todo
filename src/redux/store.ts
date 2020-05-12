import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todoReducer";
import { Todo } from "./actions";

const initialState = {};

const middleware = [thunk];

export interface StoreState {
  todos: Todo[];
}

const reducers = combineReducers<StoreState>({
  todos: todoReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
