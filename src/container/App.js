import React from 'react';
import '../css/App.min.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
