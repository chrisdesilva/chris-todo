import { Todo } from "../../entities";

export interface StateType {
  todos: Todo[];
}

export const initialState: StateType = {
  todos: [],
};
