import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./global/styles";
import theme from "./global/theme";
import { AuthProvider } from "./context/AuthProvider";

const queryClient = new QueryClient();

if (import.meta.env.VITE_APP_MODE === "production") {
  disableReactDevTools();
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </AuthProvider>
);
