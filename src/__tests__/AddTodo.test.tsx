import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddTodo, AddTodoProps } from "../components/AddTodo";

function renderAddTodoForm(props: Partial<AddTodoProps> = {}) {
  const defaultProps: AddTodoProps = {
    handleDescriptionChange() {
      return;
    },
    handleAddTodo() {
      return;
    },
    description: "",
  };
  const utils = render(<AddTodo {...defaultProps} {...props} />);
  const input = utils.getByTestId("description") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
}

test("it should show a blank form to add item to todo list", async () => {
  const { findByTestId } = renderAddTodoForm();

  const addTodoForm = await findByTestId("add-todo-form");

  expect(addTodoForm).toHaveFormValues({
    description: "",
  });
});
