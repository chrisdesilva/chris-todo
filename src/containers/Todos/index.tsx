import React, { useState, ChangeEvent, FormEvent } from "react";
import { TodosList } from "../../components/TodosList";

import { connect } from "react-redux";
import { StoreState } from "../../core/frameworks";
import { Todo } from "../../core/entities";
import { addTodo, completeTodo } from "../../core/adapters";
import { AddTodo } from "../../components/AddTodo";
import styles from "./index.module.scss";

export interface TodosProps {
  todos: Todo[];
  addTodo: Function;
  completeTodo: Function;
}

const _Todos = (props: TodosProps): JSX.Element => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDescription(value);
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      description,
      id: Math.floor(Math.random() * 100000000),
      completed: false,
    };
    props.addTodo(newTodo);
    setDescription("");
  };

  const handleTodoCompleted = (id: number) => {
    props.completeTodo(id);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <AddTodo
        description={description}
        handleDescriptionChange={handleDescriptionChange}
        handleAddTodo={handleAddTodo}
      />
      <TodosList
        handleTodoCompleted={handleTodoCompleted}
        todos={props.todos}
      />
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const Todos = connect(mapStateToProps, { addTodo, completeTodo })(
  _Todos
);
