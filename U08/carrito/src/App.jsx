import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';

const App = () => {
  const [pagina, setpagina] = useState('home');

  const navegacion = (pag) => {
    setpagina(pag);
  };

  const homeBoton = {
    backgroundColor: 'lightgreen',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  };

  const otherBoton = {
    backgroundColor: 'lightblue',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  };


  return (
    <div>
      <Header />
      <button style={homeBoton} onClick={() => navegacion('home')}>Pagina principal</button>
      <button style={otherBoton} onClick={() => navegacion('other')}>Catalogo de productos</button>

      {pagina === 'home' && <HomePage />}
      {pagina === 'other' && <OtherPage />}

      <Footer />
    </div>
  );
};

export default App;
