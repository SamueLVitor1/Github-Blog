import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { defaultTheme } from "./styles/theme/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";
import { GitHContextProvider } from "./context/GitHubContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitHContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </GitHContextProvider>
    </ThemeProvider>
  );
}
