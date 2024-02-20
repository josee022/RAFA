import React from 'react';

const Header = () => {
  return (
    <header style="background-color: #000000;">
        <img class="logo" src="imagenes/GYM.png" alt="fondo de pagina"></img>
        <div>

            <nav aria-label="enlaces web" aria-current="index">
                <div>
                    <a class="enlace" href="index.html" style="color: #ffffff;">Home &nbsp &nbsp</a>
                    <a class="enlace" href="paginas/nosotros.html" style="color: #ffffff;">Nosotros &nbsp &nbsp</a>
                    <a class="enlace" href="paginas/productos.html" style="color: #ffffff;">Productos &nbsp &nbsp</a>
                    <a class="enlace" href="paginas/cursos.html" style="color: #ffffff;">Cursos &nbsp &nbsp</a>
                    <a class="enlace" href="paginas/subscripcion.html" style="color: #ffffff;">Subscripcion &nbsp&nbsp</a>
                    <a class="enlace" href="paginas/contacto.html" style="color: #ffffff;">Contacto &nbsp &nbsp</a>
                </div>
            </nav>
        </div>
    </header>
  );
};

export default Header;
