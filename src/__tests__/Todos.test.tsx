import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Todos } from "../containers/Todos";

const setup = () => {
  const utils = render(<Todos />);
  const input = utils.getByLabelText("description") as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

test("It should allow a user to enter text", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "new todo" } });
  expect(input.value).toBe("new todo");
});
