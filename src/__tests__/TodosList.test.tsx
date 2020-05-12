import React from "react";
import { render } from "@testing-library/react";
import { TodosList } from "../components/TodosList";

test("empty todo list should render all done text", () => {
  const { getByText } = render(<TodosList todos={[]} />);
  const noTodos = getByText(/all done!/i);
  expect(noTodos).toBeInTheDocument();
});
