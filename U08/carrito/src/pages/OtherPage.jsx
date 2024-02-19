import React from 'react';
import Button from '../components/Button';

const OtherPage = () => {

  const azul = {
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
      <h1>Catalogo de productos</h1>
      {/* Catalogo */}
      <Button style={azul} label="Volver a la Página Principal" onClick={() => console.log('Ir a HomePage')} />
    </div>
  );
};

export default OtherPage;
