import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.min.css';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
