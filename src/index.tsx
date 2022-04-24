import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components'
import { scrollbar } from './styled.common';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const GlobalStyle=createGlobalStyle`
* {
  box-sizing: border-box;
  margin:0px 0px 0px 0px;
  padding:0px 0px 0px 0px ;
  border:0;
  color:white;
  font-size: 16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 400;
}

a{
  text-decoration: none;
  color:white;
}

body{
  overflow-x:hidden;
 ::-webkit-scrollbar-thumb{
        width:6px;
        border-left:1px solid white;
        background-color: black;
    }
    ::-webkit-scrollbar{
        cursor: pointer;
        width:5px;
    }
}
`
root.render(
  <React.StrictMode>
    <GlobalStyle/>
      <App />
  </React.StrictMode>
);