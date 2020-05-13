import React from "react";
import { Todo } from "../../core/entities";

interface TodosListProps {
  todos: Todo[];
}

export const TodosList = ({ todos }: TodosListProps) => {
  const todosList = todos.length ? (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.description}</li>
      ))}
    </ul>
  ) : (
    <p>All done!</p>
  );

  return todosList;
};
