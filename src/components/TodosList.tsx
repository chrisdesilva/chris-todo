import React from "react";
import { Todo } from "../redux/actions";

interface AppProps {
  todos: Todo[];
}

export const TodosList = ({ todos }: AppProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <p>{todo}</p>
      ))}
    </div>
  );
};
