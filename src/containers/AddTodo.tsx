import React from "react";
import { TodosList } from "../components/TodosList";

import { connect } from "react-redux";
import { StoreState } from "../redux/store";
import { Todo, addTodo } from "../redux/actions";

interface AppProps {
  todos: Todo[];
  addTodo: Function;
}

const _AddTodo = (props: AppProps): JSX.Element => {
  const handleAddTodo = () => {
    props.addTodo("New todo");
  };
  return (
    <div>
      <h1>Todos List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodosList todos={props.todos} />
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const AddTodo = connect(mapStateToProps, { addTodo })(_AddTodo);
