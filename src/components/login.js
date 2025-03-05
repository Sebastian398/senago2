import React, {useState} from 'react';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (event) => {
        event.preventDefault();

        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        fetch('/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-CSRFToken': 'tu_token_csrf_aqui',
            },
            body:JSON.stringify({ username, password}), 
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/home/';
            } else {
                alert('Error al iniciar sesión: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <article className="senago">
            <section id="login">
                <div className="container">
                    <section className="home2">
                        <div className="home-content2" id="login-container">
                            <h1 className="mt-5">INICIO DE SESIÓN</h1>
                            <label htmlFor="username">NOMBRE DE USUARIO</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                required 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />

                            <label htmlFor="password">CONTRASEÑA</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                required 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />

                            <a href="App.js" className="forgot">Olvidé mi contraseña</a>

                            <button type="submit" id="entrar" onClick={handleLogin}>
                                ENTRAR<i className="fa fa-arrow-circle-right"></i>
                            </button>
                        </div>
                        <div className="home-img2">
                            <img src={require('./img/logo2.png')} alt="" /> {/* Ajusta la ruta según sea necesario */}
                            <a href="/register">
                                <button id="admin">NO TENGO CUENTA<i className="fa fa-user"></i></button>
                            </a>
                        </div>
                    </section>
                </div>
            </section>

            <footer>
                <p>&copy; 2025 SENA GO</p>
            </footer>
        </article>
    );
};

export default Login;

            