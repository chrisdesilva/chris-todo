import { Todo } from "../../entities";

const ADD_TODO = "addTodo";

export interface ActionType {
  type: string;
}

export interface AddTodoActionType {
  type: string;
  todo: Todo;
}

export const addTodo = (todo: Todo): AddTodoActionType => ({
  type: ADD_TODO,
  todo,
});

export const todoReducer = (state: Todo[] = [], action: AddTodoActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state];
    default:
      return state;
  }
};

// export default (state: Todo[] = [], action: AddTodoActionType) => {

//   }
// };

// import { Dispatch } from "redux";
// import { ActionTypes } from "../types";

// export interface Todo {
//   id: number;
//   description: string;
//   completed: boolean;
// }

// export interface AddTodoAction {
//   type: ActionTypes.addTodo;
//   payload: Todo;
// }

// export const addTodo = (todo: Todo) => {
//   return (dispatch: Dispatch) => {
//     dispatch<AddTodoAction>({ type: ActionTypes.addTodo, payload: todo });
//   };
// };
