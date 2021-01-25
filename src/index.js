import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import './index.css';
import DetailArticle from './Components/Utils/DetailArticle';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/:article_id' component={DetailArticle} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
