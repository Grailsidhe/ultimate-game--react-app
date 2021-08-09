import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <main className="wrapper">
          <Header name="Ultimate Game" />
          <Switch>
            <Route  path="/" component={GameList} />
            <Route exact path="/games/:id" component={GameDetails} />
          </Switch>
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
