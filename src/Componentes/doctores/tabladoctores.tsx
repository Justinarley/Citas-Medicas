import { useEffect, useState } from 'react';
import { Navbar } from "../navbar";
import { useNavigate } from 'react-router-dom';

export function TablaDoctores() {
  const navigate = useNavigate();

  // Define el tipo de un doctor
  type Doctor = {
    iddoctor: number;
    cedula: string; // Nuevo campo
    nombre: string;
    apellidos: string;
    telefono: string;
    especialidad: string;
  };

  const [doctores, setDoctores] = useState<Doctor[]>([]);

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

  function abrirPestanaDetalle(_iddoctor: number): void {
    navigate(`/perfil-doctor/${_iddoctor}`);
  }

  async function eliminarDoctor(iddoctor: number) {
    try {
      const response = await fetch(`http://localhost:3000/eliminar-doctor/${iddoctor}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Actualizar la lista de doctores después de la eliminación
        const nuevosDoctores = doctores.filter(doctor => doctor.iddoctor !== iddoctor);
        setDoctores(nuevosDoctores);
        console.log(`Doctor con ID ${iddoctor} eliminado exitosamente`);
      } else {
        console.error(`Error al intentar eliminar al doctor con ID ${iddoctor}`);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
        <h2 style={{ fontStyle: 'italic', color: 'white' }}>Lista de Doctores</h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark text-center">
            <tr>
              <th>ID del Doctor</th>
              <th>Cédula</th> {/* Nuevo campo */}
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Teléfono</th>
              <th>Especialidad</th>
              <th>+</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {doctores.map((doctor) => (
              <tr key={doctor.iddoctor}>
                <td>{doctor.iddoctor}</td>
                <td>{doctor.cedula}</td> {/* Nuevo campo */}
                <td>{doctor.nombre}</td>
                <td>{doctor.apellidos}</td>
                <td>{doctor.telefono}</td>
                <td>{doctor.especialidad}</td>
                <td>
                  <a
                    href=""
                    onClick={() => abrirPestanaDetalle(doctor.iddoctor)}
                    className="btn btn-link"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Ver Detalles"
                  >
                    Ver detalle
                  </a>
                </td>
                <td>
                  {/* Cambiar el enlace a un botón y llamar a eliminarDoctor */}
                  <button
                    onClick={() => eliminarDoctor(doctor.iddoctor)}
                    className="btn btn-link"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Eliminar Doctor"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
