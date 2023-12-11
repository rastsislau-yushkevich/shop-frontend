import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#80BC2B'
    },
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline enableColorScheme />
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);