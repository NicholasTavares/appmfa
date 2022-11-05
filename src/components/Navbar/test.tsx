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

  it("Logo color text should be equal to gray/800 (#1F2937)", () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    const textLogo = screen.queryByText("Multi Factor Auth");

    expect(textLogo).toHaveStyle("color: #1F2937");
  });
});
