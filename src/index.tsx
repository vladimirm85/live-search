import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './redux/reducers';
import { middleware, sagaMiddleware } from './middleware';
import { rootSaga } from './saga';
import { App } from './App';

const store = createStore(reducers, middleware);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
