import { render, screen } from "@testing-library/react";
import theme from "global/theme";
import { ThemeProvider } from "styled-components";
import { DropDownOptions } from ".";

describe("<DropDownOptions />", () => {
  it("It should render the button options", () => {
    render(
      <ThemeProvider theme={theme}>
        <DropDownOptions />
      </ThemeProvider>
    );

    expect(screen.queryByTestId("button")).toBeInTheDocument();
  });

  it("It should not render the button option in medium screen or larger", () => {
    render(
      <ThemeProvider theme={theme}>
        <DropDownOptions />
      </ThemeProvider>
    );

    expect(screen.getByTestId("button")).toHaveStyleRule("display", "none", {
      media: "(min-width: 768px)",
    });
  });
});
