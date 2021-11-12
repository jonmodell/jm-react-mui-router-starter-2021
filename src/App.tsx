import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  StylesProvider,
  createTheme,
} from "@material-ui/core/styles";
import { NavBar } from "./components";
import { Home, About, List } from "./pages";

function App() {
  const theme = createTheme();
  console.log(theme);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}
export default App;

/**
import React from "react";
import { Header } from "./components";
function App() {
  return (
    <div data-testid="app-container">
      <Header title="header title" />
      <div>{"learn react"}</div>
    </div>
  );
}
export default App;
 */
