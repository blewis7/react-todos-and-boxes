import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = 5, width = 5, backgroundColor = "green"){
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const colorInput = boxList.getByLabelText("Background Color");
    fireEvent.change(colorInput, { target: { value: backgroundColor}});
    fireEvent.change(widthInput, { target: { value: width}});
    fireEvent.change(heightInput, { target: { value: height}});
    const button = boxList.getByText("Create Box!");
    fireEvent.click(button);
}

// smoke test
it("renders without crashing", function() {
  render(<BoxList />);
});

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    addBox(boxList);

    expect(boxList.queryByText("X")).toBeInTheDocument();
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can remove a box", function(){
    const boxList = render(<BoxList />);

    addBox(boxList);
    expect(boxList.queryByText("X")).toBeInTheDocument();
    const removeButton = boxList.getByText("X");
    fireEvent.click(removeButton);
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
})