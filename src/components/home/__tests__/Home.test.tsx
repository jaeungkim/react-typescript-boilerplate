import React from "react";
import { render } from "@testing-library/react";
import Home from "@/components/home/Home";

describe("Home", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Home Page")).toBeInTheDocument();
  });
});
