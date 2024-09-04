import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Router from "./Router";
import React, { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    document.title = 'Horus';
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
