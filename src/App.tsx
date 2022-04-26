
import React from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom'
import {Layout} from './components/layout/index'
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import {store} from './store/index';

function App() {
  return (
          <Layout>
          <BrowserRouter>
          <Provider store={store}>
            
             <AppRouter/>
          </Provider>
          </BrowserRouter>
          </Layout>
  );
}

export default App;
