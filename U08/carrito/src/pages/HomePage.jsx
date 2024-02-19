import React from 'react';
import Button from '../components/Button';

const HomePage = () => {

  const verde = {
    backgroundColor: 'lightgreen',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>¡Gracias por visitar nuestra tienda!</h1>
      {/* Pagina de inicio  */}
      <Button style={verde} label="Ver catalogo de productos" onClick={() => console.log('Ir a OtherPage')} />
    </div>
  );
};

export default HomePage;
