import { useEffect, useState } from 'react';
import { Navbar } from "../navbar";
import { useNavigate } from 'react-router-dom';


export function TablaPaciente() {
  const navigate = useNavigate();

    type Paciente = {
        ci: string;
        nombrepaciente: string;
        apellidopaciente: string;
        telefono: string;
        correoelectronico: string;
    };

    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    

    useEffect(() => {
        async function obtenerPacientes() {
            try {
                const response = await fetch('http://localhost:3000/lista-pacientes');
                if (response.ok) {
                    const data = await response.json();
                    setPacientes(data);
                } else {
                    console.error('Error al obtener la lista de pacientes');
                }
            } catch (error) {
                console.error('Error en la conexión:', error);
            }
        }

        obtenerPacientes();
    }, []);

  function abrirPestanaDetalle(_ci: string): void {
    navigate(`/perfil-paciente/${_ci}`);
  }
  async function eliminarPaciente(ci: string) {
    try {
      const response = await fetch(`http://localhost:3000/eliminar-paciente/${ci}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Actualizar la lista de pacientes después de la eliminación
        const nuevosPacientes = pacientes.filter(paciente => paciente.ci !== ci);
        setPacientes(nuevosPacientes);
        console.log(`Paciente con CI ${ci} eliminado exitosamente`);
      } else {
        console.error(`Error al intentar eliminar al paciente con CI ${ci}`);
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  }

    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
                <h2 style={{ fontStyle: 'italic', color: 'white' }}>Lista de Pacientes</h2>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark text-center">
                        <tr>
                            <th>Número de Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th>Correo Electrónico</th>
                            <th>+</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {pacientes.map((paciente) => (
                            <tr key={paciente.ci}>
                                <td>{paciente.ci}</td>
                                <td>{paciente.nombrepaciente}</td>
                                <td>{paciente.apellidopaciente}</td>
                                <td>{paciente.telefono}</td>
                                <td>{paciente.correoelectronico}</td>
                                <td>
                                    <a
                                        href=""
                                        onClick={() => abrirPestanaDetalle(paciente.ci)}
                                        className="btn btn-link"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Ver Detalles"
                                    >
                                        Ver detalle
                                    </a>
                                </td>
                                <td>
                                <button
                                  onClick={() => eliminarPaciente(paciente.ci)}
                                  className="btn btn-link"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Eliminar Paciente"
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
