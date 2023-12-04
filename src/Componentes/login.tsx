import { useState } from 'react';
import Fond from '../assets/Imagenes/fondo.login.jpg';
import Logo from '../assets/Imagenes/logo.png';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contrasena }),
        mode: 'cors',
      });

      if (response.ok) {
        alert('Inicio de sesión exitoso');
        navigate('/inicio');
      } else {
        alert('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };
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
            <input type="text" className="form-control" value={usuario}
          onChange={(e) => setUsuario(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input type="password" className="form-control" value={contrasena}
          onChange={(e) => setContrasena(e.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
}
