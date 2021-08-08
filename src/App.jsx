import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import './App.css';

function App() {
  return (
    <Router>
      <main className="wrapper">
        <Header name="Ultimate Game" />
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route exact path="/games/:id" component={GameDetails} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
