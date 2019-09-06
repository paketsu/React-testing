import React from 'react';
import './App.css';
import Header from './Header/Header'; /*HUOM! Tiedoston nimen perään ei tarvitse laittaa .js! */ 
import Main from './Main/Main';
import Footer from './Footer/Footer';

// Huom! Komponentti Header kirjoitetaan funktion sisään kuten alla:
const App = () => {
  return (
    <div>
      <Header title="This is my header from props" text="Wow, now we actually can make it!"/>
      <Main text="This is the main area" button="Click me!"/>
      <Footer />
    </div>
  );
}

export default App;
