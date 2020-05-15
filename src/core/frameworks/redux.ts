import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "../adapters/redux";
import { Todo } from "../entities";

export interface StoreState {
  todos: Todo[];
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  todos: todoReducer,
});

export const configureStore = () => {
  const middleware = [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middleware))

  const store = createStore(reducers ,enhancer);

  return store;
};
