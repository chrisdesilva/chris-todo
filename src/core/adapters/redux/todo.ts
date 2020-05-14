import { Todo } from "../../entities";

const ADD_TODO = "addTodo";
const COMPLETE_TODO = "completeTodo";

export interface ActionType {
  type: string;
  todo: Todo | null;
  id: number | null;
}

export interface AddTodoActionType {
  type: string;
  todo: Todo;
}

export interface CompleteTodoActionType {
  type: string;
  id: number;
}

export const addTodo = (todo: Todo): AddTodoActionType => ({
  type: ADD_TODO,
  todo,
});

export const completeTodo = (id: number): CompleteTodoActionType => ({
  type: COMPLETE_TODO,
  id,
});

export const todoReducer = (state: Todo[] = [], action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.todo, ...state];
    case COMPLETE_TODO:
      const item = state.filter((todo) => todo.id !== action.id);
      return item;
    default:
      return state;
  }
};
