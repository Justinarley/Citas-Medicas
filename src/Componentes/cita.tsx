import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Navbar } from "./navbar";


export function Citas() {
  const [error, setError] = useState('');
  const [cedula, setCedula] = useState('');
  const [pacienteData, setPacienteData] = useState({
    ci: '',
    nombrepaciente: '',
    apellidopaciente: '',
    telefono: '',
    correoelectronico: '',
  });
  const [] = useState(new Date());

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/buscar-paciente/${cedula}`);

      if (response.ok) {
        const data = await response.json();
        console.log('Datos del paciente encontrado:', data);
        setPacienteData(data);
        setError('');
      } else {
        console.error('No se encontró un paciente con CI', cedula);
        setError(`No se encontró un paciente con CI ${cedula}`);
      }
    } catch (error) {
      console.error('Error al buscar paciente:', error);
      setError('Error al buscar paciente. Inténtalo de nuevo.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Número de cédula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={handleSearch}>Buscar</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {pacienteData.ci && (
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th>CI</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{pacienteData.ci}</td>
                    <td>{pacienteData.nombrepaciente}</td>
                    <td>{pacienteData.apellidopaciente}</td>
                    <td>{pacienteData.telefono}</td>
                    <td>{pacienteData.correoelectronico || '-'}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <div className="col-md-6">
            <div className="mt-6">
              <h3>Seleccione una fecha con hora:</h3>
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
