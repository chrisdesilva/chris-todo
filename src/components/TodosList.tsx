import React from "react";
import { Todo } from "../redux/actions";

interface TodosListProps {
  todos: Todo[];
}

export const TodosList = ({ todos }: TodosListProps) => {
  const todosList = todos.length ? (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  ) : (
    <p>All done!</p>
  );

  return todosList;
};
