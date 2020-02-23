import React from 'react';

import Home from './routes/Home';
import Info from './routes/Info';
import Order from './routes/Order';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/info" component={Info} />
            <Route path="/order/:id" component={Order} />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
