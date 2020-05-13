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

test("it should allow the user to add a todo", () => {
  const { input } = renderAddTodoForm();
  fireEvent.change(input, { target: { value: "new todo" } });
  expect(input.value).toBe("new todo");
});

test("it should fire an onchange event wen the user enters text in the description", () => {
  const handleDescriptionChange = jest.fn();
  const { input } = renderAddTodoForm();
  fireEvent.change(input, { target: { value: "TEST VALUE" } });
  expect(handleDescriptionChange).toHaveBeenCalledTimes(1);
});
