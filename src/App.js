import React, {useRef} from 'react';
import './style.css';
import './css/login.css';
import './css/register.css';
import './css/shop.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import logo from './img/logo2.png';
import daniel from './img/daniel.jpg';
import nicolas from './img/nicolas.jpg';
import yo from './img/yo.jpeg';

function App() {
 
  const bienvenidaRef = useRef(null);
  const descripcionRef = useRef(null);
  const creadoresRef = useRef(null);

  const handleScrollDown = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleScrollUp = () => {
    bienvenidaRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Router>
      <div>
        <button id="scrollBtn" onClick= {handleScrollUp}>
          <i className='fa fa-arrow-circle-up'></i>
        </button>

        {/* Sección de bienvenida */}
        <article ref={bienvenidaRef}>
          <section id="login">
            <div className="container">
              <section className="home">
                <div className="home-img">
                  <img src={logo} alt="logo" />
                </div>
                <div className="home-content">
                  <h1>Bienvenido a <span>SENA GO</span></h1>
                  <h3 className="typing-text">Tecnología que  <span> </span></h3>
                  <div className="social-icons">
                    <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://x.com"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                  <div className="options">
                    <a href="/Login" className="btn">Iniciar sesión</a>
                    <a href="/register" className="btn">Crear cuenta</a>
                  </div>
                  <button id="downBtn" onClick={() => handleScrollDown(descripcionRef)}>
                    <i className="fa fa-arrow-circle-down"></i>
                  </button>
                </div>
              </section>
            </div>
          </section>
        </article>

        {/* Descripción de SENA GO */}
        <article ref={descripcionRef}>
          <section id="login">
            <div className="container">
              <section className="home">
                <div className="home-img">
                  <img src={logo} alt="" />
                </div>
                <div className="home-content">
                  <h1>¿Qué es <span>SENA GO</span>?</h1>
                  <h3 className="info">
                    <span>SENA GO</span> es un proyecto que busca una mejor experiencia para pedidos en la cafetería <span>SENA</span> facilitando a los usuarios un método más eficaz para llevar sus compras y disfrutar de sus recesos sin esperar en la fila.
                  </h3>
          
                  <button id="downBtn" onClick={() => handleScrollDown(creadoresRef)}>
                    <i className="fa fa-arrow-circle-down"></i>
                  </button>
                </div>
              </section>
            </div>
          </section>
        </article>

        {/* Creadores */}
        <article ref={creadoresRef}>
          <section id="login">
            <div className="container">
              <section className="home">
                <div className="home-img">
                  <img src={logo} alt="Creadores" />
                </div>
                <div className="home-content">
                  <h1>Sus <span>creadores</span></h1>
                  <div className="creadores">
                    <div className="home-dani">
                      <img src={daniel} alt="Daniel" />
                      <h3 className="info">Daniel Salamanca</h3>
                    </div>
                    <div className="home-nico">
                      <img src={nicolas} alt="Nico" />
                      <h3 className="info">Nicolás Agamez</h3>
                    </div>
                    <div className="home-sebas">
                      <img src={yo} alt="Sebas" />
                      <h3 className="info">Sebastián Ramirez</h3>
                    </div>
                    <div className="home-johan">
                      <img src={logo} alt="Johan" />
                      <h3 className="info">Johan Uñate</h3>
                    </div>
                  </div>
                  <button id="downBtn">
                    <i className="fa fa-arrow-circle-down"></i>
                  </button>
                </div>
              </section>
            </div>
          </section>
        </article>

        {/* Rutas */}
        <Routes>
          <Route path="/Login" element={<Login />} />
          {/* Asegúrate de tener una ruta para el registro */}
          <Route path="/register" element={<div>Registro</div>} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy;2025 SENA GO</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
