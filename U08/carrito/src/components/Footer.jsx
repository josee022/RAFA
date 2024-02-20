import React from 'react';

const Footer = () => {
  return (
    <footer>
        <hr class="lineaDorada" />
        <div>
            <div>
                <h2 class="ayudah2">AYUDA</h2><br/><br/>
                <p class="terminos">Términos y condiciones</p><br/><br/>
                <p class="terminos">Política de privacidad</p><br/><br/>
                <p class="terminos">Política de cookies</p><br/><br/>
                <p class="terminos">Preguntas frecuentes</p><br/><br/>
            </div>

            <div>
                <h2 class="contactah2">CONTACTA CON NOSOTROS</h2><br/><br/>
                <p class="terminos2"><img class="gmail" src="imagenes/gmail.png" alt="gmail" />&nbsp Gym.mondelo@gmail.com
                </p><br/><br/>
                <p class="terminos2"><img class="gmail" src="imagenes/telefono.png" alt="gmail" />&nbsp 622 33 18 27</p>
                <br/><br/>
                <p class="terminos2"><img class="gmail" src="imagenes/instagram.png" alt="gmail" />&nbsp @GymMondelo_</p>
                <br/><br/>
                <p class="terminos2"><img class="gmail" src="imagenes/youtube.png" alt="gmail" />&nbsp GymMondelo Fit</p>
                <br/><br/>
            </div>
        </div>
        <div>
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
                <img class="licencia" src="https://licensebuttons.net/l/by/4.0/88x31.png"
                    alt="Creative Commons License" />
            </a>
        </div>
    </footer>
  );
};

export default Footer;
