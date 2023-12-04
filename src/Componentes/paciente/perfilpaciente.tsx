import  { useEffect, useState, useRef } from 'react';
import { Navbar } from "../navbar";
import { useParams } from 'react-router-dom';

export function PerfilPaciente() {
  const { ci } = useParams();
  const [paciente, setPaciente] = useState({
    CI: '',
    NombrePaciente: '',
    ApellidoPaciente: '',
    Telefono: '',
    Direccion: '',
    CorreoElectronico: '',
    FechaNacimiento: '',
    AntecedentesMedicos: '',
  });

  const [editPaciente, setEditPaciente] = useState({ ...paciente });
  const isDataLoaded = useRef(false);

  useEffect(() => {
    if (!isDataLoaded.current) {
      async function obtenerDetallesPaciente() {
        try {
          const response = await fetch(`http://localhost:3000/lista-pacientes/${ci}`);
          if (response.ok) {
            const data = await response.json();
            console.log('Datos del paciente:', data);
            setPaciente(data);
            setEditPaciente(data);
            isDataLoaded.current = true;
          } else {
            console.error(`Error al obtener detalles del paciente con CI ${ci}`);
          }
        } catch (error) {
          console.error('Error en la conexión:', error);
        }
      }

      obtenerDetallesPaciente();
    }
  }, [ci]);

  const handleInputChange = (key: string, value: string) => {
    setEditPaciente((prevEditPaciente) => ({ ...prevEditPaciente, [key]: value }));
  };

  const guardarCambios = async () => {
    try {
      const response = await fetch(`http://localhost:3000/actualizar-paciente/${ci}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editPaciente),
      });

      if (response.ok) {
        alert(`Datos del paciente con CI: ${ci} actualizados exitosamente`);
        setPaciente({ ...editPaciente });
      } else {
        alert(`Error al intentar actualizar los datos del paciente con CI: ${ci}`);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };
  const formatLabel = (key: string) => {
    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
    return formattedKey.replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Perfil del Paciente</h2>
        <form>
          <table className="table">
            <tbody>
              {Object.entries(editPaciente).map(([key, value]) => (
                <tr key={key}>
                  <td>
                    <label htmlFor={key} className="form-label">
                      {formatLabel(key)}:
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      id={key}
                      value={value !== null ? value : ''}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="btn btn-primary" onClick={guardarCambios}>
            Guardar cambios
          </button>
        </form>
      </div>
    </>
  );
  
}
