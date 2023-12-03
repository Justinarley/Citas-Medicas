import { Link } from 'react-router-dom';
import Logo from '../assets/Imagenes/logo.png';

export function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#87CEEB', fontStyle: 'italic' }}>
                <img src={Logo} style={{ width: '175px', height: '90px' }} alt="Logo de la clínica dental" />
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/inicio" style={{ color: '#fff', fontWeight: 'bold', marginRight: '20px', borderBottom: '2px solid #fff' }}>
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                
                                <Link className="nav-link" to="/paciente" style={{ color: '#fff', fontWeight: 'bold', marginRight: '20px', borderBottom: '2px solid #fff' }}>
                                    Registro Paciente
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doctor" style={{ color: '#fff', fontWeight: 'bold', marginRight: '20px', borderBottom: '2px solid #fff' }}>
                                    Registro Doctor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tablapacientes" style={{color: '#fff', fontWeight: 'bold', marginRight: '20px', borderBottom: '2px solid #fff'  }}>
                                    Pacientes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tabladoctores" style={{ color: '#fff', fontWeight: 'bold', marginRight: '20px', borderBottom: '2px solid #fff' }}>
                                    Doctores
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
