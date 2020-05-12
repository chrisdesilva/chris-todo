import { ActionTypes } from "../types";
import { Todo, AddTodoAction } from "../actions";

export default (state: Todo[] = [], action: AddTodoAction) => {
  switch (action.type) {
    case ActionTypes.addTodo:
      return [action.payload, ...state];
    default:
      return state;
  }
};
