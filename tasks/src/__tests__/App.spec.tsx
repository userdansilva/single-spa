import { render } from "@testing-library/react";
import { App } from "../App";

describe("Task Compoenent", () => {
  beforeEach(() => {
    //
  });

  it("should render correctly", () => {
    const { getByText } = render(<App />);

    expect(getByText("This is Tasks")).toBeInTheDocument();
  });
});
