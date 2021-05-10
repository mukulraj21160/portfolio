import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Themes/Theme";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}
