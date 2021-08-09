import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; //ここで作成したstoreがどこからでも参照できるようにするのがProvider
import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index.js';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
