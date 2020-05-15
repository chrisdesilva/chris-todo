import React from "react";
import { Todo } from "../../core/entities";
import styles from "./index.module.scss";

import { connect } from "react-redux";
import { StoreState } from "../../core/frameworks";

interface Props {
  todos: Todo[]; 
  handleTodoCompleted: (id: number) => void
}

export const _TodosList = ({ todos, handleTodoCompleted }: Props) => {
  const todosList = todos.length ? (
    <ul>
      {todos.map((todo) => (
        <li
          onClick={() => handleTodoCompleted(todo.id)}
          className={
            todo.completed
              ? [styles.done, styles.item].join(" ")
              : [styles.todo, styles.item].join(" ")
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

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const TodosList = connect(mapStateToProps)(_TodosList)
