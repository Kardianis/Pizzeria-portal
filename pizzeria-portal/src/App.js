import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  
  </div>
  );
}

export default App;
