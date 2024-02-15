import './App.css'
import { useState } from 'react';

function click() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className='boton' onClick={() => setCount(count + 1)}>
        CLICK
      </button>
      <p>El boton se a pulsado {count} veces</p>
    </div>
  );
}

export default click
