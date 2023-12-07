import { useState, useEffect } from 'react';
import { Navbar } from './navbar';
import { useNavigate } from 'react-router-dom';

export function Citas() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [cedula, setCedula] = useState('');
  const [pacienteData, setPacienteData] = useState({
    ci: '',
    nombrepaciente: '',
    apellidopaciente: '',
    telefono: '',
    correoelectronico: '',
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [doctores, setDoctores] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  type Doctor = {
    iddoctor: number;
    cedula: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    especialidad: string;
  };

  useEffect(() => {
    async function obtenerDoctores() {
      try {
        const response = await fetch('http://localhost:3000/lista-doctores');
        if (response.ok) {
          const data = await response.json();
          setDoctores(data);
        } else {
          console.error('Error al obtener la lista de doctores');
        }
      } catch (error) {
        console.error('Error en la conexión:', error);
      }
    }

    obtenerDoctores();
  }, []);

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

  const handleSaveCita = async () => {
    try {
      if (!cedula || !selectedDate || !selectedTime || !selectedDoctor) {
        setError('Por favor, complete todos los campos antes de guardar la cita.');
        return;
      }
      const {
        iddoctor,
        nombre,
        apellidos,
        cedula: doctorcedula,
        especialidad: doctorespecialidad,
      } = selectedDoctor;

      const response = await fetch('http://localhost:3000/guardar-cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pacienteCI: pacienteData.ci,
          fechaHora: `${selectedDate} ${selectedTime}`,
          nombrepaciente: pacienteData.nombrepaciente,
          apellidopaciente: pacienteData.apellidopaciente,
          doctornombre: nombre,
          doctorapellidos: apellidos,
          doctorcedula,
          doctoriddoctor: iddoctor,
          doctorespecialidad,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Cita guardada exitosamente. ID:', data.citaId);
        setSuccessMessage('Cita guardada exitosamente.');
        setCedula('');
        setPacienteData({
          ci: '',
          nombrepaciente: '',
          apellidopaciente: '',
          telefono: '',
          correoelectronico: '',
        });
        setSelectedDate('');
        setSelectedTime('');
        setSelectedDoctor(null);
        setError('');
        navigate('/calendario');
      } else {
        console.error('Error al guardar la cita:', response.statusText);
        setError('Error al guardar la cita. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al guardar la cita:', error);
      setError('Error al guardar la cita. Inténtalo de nuevo.');
    }
  };

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
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
            <button className="btn btn-primary mt-2" onClick={handleSearch}>
              Buscar
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
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
              <h3>Seleccione una fecha y hora:</h3>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <label>Seleccione un doctor:</label>
            <select
              className="form-control"
              value={selectedDoctor?.iddoctor || ''}
              onChange={(e) => {
                const selectedId = parseInt(e.target.value, 10);
                const selected = doctores.find((doctor: Doctor) => doctor.iddoctor === selectedId);

                if (selected) {
                  handleSelectDoctor(selected);
                }
              }}
            >
              <option value="">Seleccionar doctor...</option>
              {doctores.map((doctor: Doctor) => (
                <option key={doctor.iddoctor} value={doctor.iddoctor}>
                  {doctor.nombre} {doctor.apellidos} - {doctor.especialidad}
                </option>
              ))}
            </select>
            <button className="btn btn-primary mt-2" onClick={handleSaveCita}>
              Guardar Cita
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
