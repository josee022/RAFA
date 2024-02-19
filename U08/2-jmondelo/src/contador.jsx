import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [valorInput, setValorInput] = useState('');
  const [tiempo, settiempo] = useState(null);
  const [segundos, setsegundos] = useState(0);

  const inicioContador = () => {
    const segundos = parseInt(valorInput);
    if (!isNaN(segundos) && segundos > 0) {
      settiempo(segundos);
    }
  };

  const reinicioContador = () => {
    settiempo(null);
    setsegundos(0);
    setValorInput('');
  };

  useEffect(() => {
    let contador;

    if (tiempo !== null && segundos < tiempo) {
      contador = setInterval(() => setsegundos((segundosSumando) => segundosSumando + 1), 1000);
    }
    return () => clearInterval(contador);

  }, [tiempo, segundos]);

  return (
    <div>
      {tiempo === null ? (
        <div>
          <p>¿Cuántos segundos vamos a contar?</p>
          <input
            type="number"
            value={valorInput}
            onChange={(e) => setValorInput(e.target.value)}
          />
          <button onClick={inicioContador}>Iniciar</button>
        </div>
      )
      :
      (
        <div>
          {segundos < tiempo ? (
            <p>
              Soy un conteo hasta el {valorInput} y han transcurrido {segundos} segundos.
            </p>
          )
          :
          (
            <div>
              <p>Se ha terminado el tiempo</p>
              <button onClick={reinicioContador}>Reiniciar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Contador;
