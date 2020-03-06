import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: border-box;
}

  body {
    padding: 0;
    margin: 0;
    color: #b2bbc8;
    font-family: Avenir, Nunito, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

`

ReactDOM.render(
    <>
    <GlobalStyle />
    <App />
    Hello
  </>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
