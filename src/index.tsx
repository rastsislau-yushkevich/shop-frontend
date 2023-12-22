import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from 'store';

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
    <Provider store={store}>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);