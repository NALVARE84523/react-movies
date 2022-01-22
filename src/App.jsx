import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Component }  from 'react'
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
