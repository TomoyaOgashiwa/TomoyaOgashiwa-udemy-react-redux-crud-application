import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; //ここで作成したstoreがどこからでも参照できるようにするのがProvider
import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index.js';
import EventsNew from './components/events_new.js';
import EventsShow from './components/events_show.js';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const enhancer = process.env.NODE_ENV === "development" ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventsNew}/>
        <Route path="/events/:id" component={EventsShow}/>
        <Route exact path="/" component={EventsIndex}/>
        <Route exact path="/events" component={EventsIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
