import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';

import theme from './styles/theme'
import { ThemeProvider } from 'styled-components';
import AppSeason from './AppSeason'

// take a react component and show it on the screen
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppSeason />
  </ThemeProvider>,
  document.querySelector('#root')
)
