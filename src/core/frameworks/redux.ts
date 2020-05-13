import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "../adapters/redux";
import { Todo } from "../entities";

export interface StoreState {
  todos: Todo[];
}
const reducers = combineReducers<StoreState>({
  todos: todoReducer,
});

export const configureStore = () => {
  const middleware = [thunk];

  const store = createStore(reducers, applyMiddleware(...middleware));

  return store;
};
