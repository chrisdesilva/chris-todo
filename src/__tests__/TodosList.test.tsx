import React from "react";
import { render } from "@testing-library/react";
import { TodosList } from "../components/TodosList";

test("empty todo list should render all done text", () => {
  const { getByText } = render(<TodosList todos={[]} />);
  const noTodos = getByText(/all done!/i);
  expect(noTodos).toBeInTheDocument();
});

test("todo list with at least one item should not render all done text", () => {
  const { queryByText } = render(
    <TodosList todos={[{ description: "todo one", completed: false, id: 1 }]} />
  );
  const noTodos = queryByText("all done!");
  expect(noTodos).not.toBeInTheDocument();
});

test("todos list should display all todos", () => {
  const { getAllByText } = render(
    <TodosList
      todos={[
        { description: "todo one", completed: false, id: 1 },
        { description: "todo two", completed: false, id: 2 },
      ]}
    />
  );
  const todos = getAllByText(/todo/i);
  expect(todos).toHaveLength(2);
});
