import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, item="Celebrate finding money by spending it"){
    const itemInput = todoList.getByLabelText("New To-Do Item:");
    fireEvent.change(itemInput, { target: { value: item}});
    const button = todoList.getByText("Add To-Do Item");
    fireEvent.click(button);
};

// smoke test
it("renders without crashing", function() {
  render(<TodoList />);
});

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function() {
    const todoList = render(<TodoList />);

    expect(todoList.queryByText("X")).not.toBeInTheDocument();

    addTodo(todoList);

    expect(todoList.queryByText("X")).toBeInTheDocument();
    expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
});

it("can remove a todo", function(){
    const todoList = render(<TodoList />);

    addTodo(todoList);
    expect(todoList.queryByText("X")).toBeInTheDocument();
    const removeButton = todoList.getByText("X");
    fireEvent.click(removeButton);
    expect(todoList.queryByText("X")).not.toBeInTheDocument();
})