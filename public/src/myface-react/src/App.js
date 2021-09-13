import React from "react";
import './App.scss';
import {PostList} from './PostList';
import {UserProfilePage} from './UserProfilePage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import{CreateUser} from './CreateUser';
import { isNamedExportBindings } from "typescript";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/posts/:pagenumber">
        <PostList />
      </Route>
      <Route path="/user/create">
        <CreateUser />
      </Route>
      <Route path="/users/:id">
      <UserProfilePage />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;

/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
