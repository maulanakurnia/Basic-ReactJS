import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './container/Home'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/reducer/globalReducer'

// Store <-- Sebuah wadah besar yang menyimpan state secara global
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);