import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { AddTodo, AddTodoProps } from "../components/AddTodo";
import { TodosList } from "../components/TodosList";

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
  const addTodoBtn = utils.getByTestId("submit");
  return {
    input,
    addTodoBtn,
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

test("new todo should not be added if input is empty", () => {
  const { addTodoBtn } = renderAddTodoForm();
  const { getByText } = render(<TodosList todos={[]} />);

  fireEvent.click(addTodoBtn);
  const noTodos = getByText(/all done!/i);
  expect(noTodos).toBeInTheDocument();
});

test("should call submit handler with description value when submit button is clicked", () => {
  const handleAddTodo = jest.fn();
  const handleDescriptionChange = jest.fn();
  const { getByTestId, getByLabelText } = render(
    <AddTodo
      description={"new todo"}
      handleDescriptionChange={handleDescriptionChange}
      handleAddTodo={handleAddTodo}
    />
  );
  const input = getByLabelText("Todo") as HTMLInputElement;

  fireEvent.change(input, {
    target: {
      value: {
        description: "new todo",
        id: 1,
        completed: false,
      },
    },
  });

  fireEvent.click(getByTestId("submit"));

  expect(handleAddTodo).toHaveBeenCalledTimes(1);
  expect(input).toHaveValue("new todo");
});
