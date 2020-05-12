import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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
  return render(<AddTodo {...defaultProps} {...props} />);
}

describe("<AddTodo />", () => {
  test("should show a blank form to add item to todo list", async () => {
    const { findByTestId } = renderAddTodoForm();

    const addTodoForm = await findByTestId("add-todo-form");

    expect(addTodoForm).toHaveFormValues({
      description: "",
    });
  });
});
