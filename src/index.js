import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainContainer from './components/page/container';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/broadcast">
          <MainContainer baseUrl={'broadcast'} />
        </Route>
        <Route path="/">
          <MainContainer baseUrl={'maincontainer'} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
