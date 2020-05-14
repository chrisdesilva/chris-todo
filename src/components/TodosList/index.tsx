import React from "react";
import { Todo } from "../../core/entities";
import styles from "./index.module.scss";

interface TodosListProps {
  todos: Todo[];
  handleTodoCompleted: Function;
}

export const TodosList = ({ todos, handleTodoCompleted }: TodosListProps) => {
  const todosList = todos.length ? (
    <ul>
      {todos.map((todo) => (
        <li
          onClick={() => handleTodoCompleted(todo.id)}
          className={
            todo.completed
              ? [styles.todo, styles.item].join(" ")
              : [styles.done, styles.item].join(" ")
          }
          key={todo.id}
          value={todo.id}
        >
          {todo.description}
        </li>
      ))}
    </ul>
  ) : (
    <p className={[styles.todo, styles.item].join(" ")}>All done!</p>
  );

  return <div id={styles.wrapper}>{todosList}</div>;
};
