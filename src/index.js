import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// pass store down as a prop. App will get access to the store through Provider
ReactDOM.render(
  <Provider store={createStore(reducers)} > 
    <App />
  </Provider>
  , document.querySelector('#root')
  );
