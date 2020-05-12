import React, { ChangeEvent, FormEvent } from "react";

export interface AddTodoProps {
  description: string;
  handleDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: (e: FormEvent) => void;
}

const _AddTodo = ({
  description,
  handleAddTodo,
  handleDescriptionChange,
}: AddTodoProps): JSX.Element => {
  return (
    <form data-testid="add-todo-form" onSubmit={handleAddTodo}>
      <label htmlFor="description">Todo</label>
      <input
        type="text"
        id="description"
        data-testid="description"
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button data-testid="submit" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export const AddTodo = _AddTodo;
