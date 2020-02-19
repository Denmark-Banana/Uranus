import React from 'react';
import Home from './routes/Home';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
})


function App() {
  return (
    <ThemeProvider theme={theme} style = {{padding:'20px'}}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
