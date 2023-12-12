import { useEffect, useState, useRef } from 'react';
import { Navbar } from "../navbar";
import { useParams } from 'react-router-dom';

export function PerfilDoctor() {
  const { iddoctor } = useParams();
  console.log('ID del doctor:', iddoctor);
  const [doctor, setDoctor] = useState({
    iddoctor: '',
    cedula: '',
    nombre: '',
    apellidos: '',
    telefono: '',
    especialidad: '',
  });

  const [editDoctor, setEditDoctor] = useState({ ...doctor });
  const isDataLoaded = useRef(false);

  useEffect(() => {
    if (!isDataLoaded.current) {
      async function obtenerDetallesDoctor() {
        try {
          const response = await fetch(`http://localhost:3000/lista-doctores/${iddoctor}`);
          if (response.ok) {
            const data = await response.json();
            console.log('Datos del doctor:', data);
            setDoctor(data);
            setEditDoctor(data);
            isDataLoaded.current = true;
          } else {
            console.error(`Error al obtener detalles del doctor con ID ${iddoctor}`);
          }
        } catch (error) {
          console.error('Error en la conexión:', error);
        }
      }

      obtenerDetallesDoctor();
    }
  }, [iddoctor]);

  const handleInputChange = (key: string, value: string) => {
    setEditDoctor((prevEditDoctor) => ({ ...prevEditDoctor, [key]: value }));
  };

  const guardarCambios = async () => {
    try {
      const response = await fetch(`http://localhost:3000/actualizar-doctor/${iddoctor}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editDoctor),
      });

      if (response.ok) {
        alert(`Datos del doctor con ID: ${iddoctor} actualizados exitosamente`);
        setDoctor({ ...editDoctor });
      } else {
        alert(`Error al intentar actualizar los datos del doctor con ID: ${iddoctor}`);
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
        <h2>Perfil del Doctor</h2>
        <form>
          <table className="table">
            <tbody>
              {Object.entries(editDoctor).map(([key, value]) => (
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