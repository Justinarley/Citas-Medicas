import { useState } from "react";
import Fond from '../assets/Imagenes/fondo.login.jpg';
import Logo from '../assets/Imagenes/logo.png';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');

  // const handleLogin = () => {
  //   // Lógica de autenticación aquí
  // };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6" style={{ backgroundColor: '#87CEEB', padding: '50px' }}>
          <img
            src={Fond}
            alt="Imagen Consultorio Dental"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-md-6" style={{ backgroundColor: '#F0F8FF', padding: '50px', fontStyle: 'italic' }}>
          <img src={Logo}></img>
          <h2>Iniciar Sesion</h2>
          <div className="mb-3">
            <label className="form-label">Usuario:</label>
            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="btn btn-primary">Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
}
