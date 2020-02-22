import React from 'react';
import Home from './routes/Home';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { purple, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red,
  },
  background: '#eeeeee',
  boxShadow: '0 2px 3px 1px gray',
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
