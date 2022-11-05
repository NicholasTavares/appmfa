import { render, screen } from "@testing-library/react";
import theme from "global/theme";
import { ThemeProvider } from "styled-components";
import { Navbar } from ".";

describe("<Navbar />", () => {
  it("It should render the navbar", () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    expect(screen.queryByRole("navigation")).toBeInTheDocument();
  });
});
