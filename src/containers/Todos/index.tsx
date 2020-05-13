import React, { useState, ChangeEvent, FormEvent } from "react";
import { TodosList } from "../../components/TodosList";

import { connect } from "react-redux";
import { StoreState } from "../../core/frameworks";
import { Todo } from "../../core/entities";
import { addTodo } from "../../core/adapters";
import { AddTodo } from "../../components/AddTodo";

export interface TodosProps {
  todos: Todo[];
  addTodo: Function;
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
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo
        description={description}
        handleDescriptionChange={handleDescriptionChange}
        handleAddTodo={handleAddTodo}
      />
      <TodosList todos={props.todos} />
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const Todos = connect(mapStateToProps, { addTodo })(_Todos);
