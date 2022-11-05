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

  it("Logo SVG icon must have description and match value", () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    const icon = screen.queryByRole("graphics-document", {
      name: "Logotipo minimalista de um cofre de cores cinza escuro e branco.",
    });

    expect(icon).toBeInTheDocument();
  });

  it("SVG button option icon in navbar must have description and match value", () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    const icon = screen.queryByRole("graphics-document", {
      name: "Imagem de três pontos cinza escuro verticais.",
    });

    expect(icon).toBeInTheDocument();
  });

  it("Navbar should not have options button in medium screen", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    );

    expect(getByTestId("option-container")).toHaveStyleRule("display", "none", {
      media: "(min-width: 768px)",
    });
  });
});
