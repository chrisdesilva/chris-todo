import React, { ChangeEvent, FormEvent, FunctionComponent } from "react";
import styles from "./index.module.scss";

export interface AddTodoProps {
  description: string;
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: (e: FormEvent) => void;
}

const _AddTodo: FunctionComponent<AddTodoProps> = ({
  description,
  handleAddTodo,
  handleDescriptionChange,
}) => {
  return (
    <form
      data-testid="add-todo-form"
      onSubmit={handleAddTodo}
      className={styles.form}
    >
      <label htmlFor="description">Todo</label>
      <input
        type="text"
        id="description"
        data-testid="description"
        name="description"
        aria-label="description"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Add todo..."
        required
      />
      <button data-testid="submit" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export const AddTodo = _AddTodo;
