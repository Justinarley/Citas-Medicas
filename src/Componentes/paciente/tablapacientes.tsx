import { Navbar } from "../navbar";

export function TablaPaciente() {
    // Supongamos que tienes una lista de pacientes, cada uno representado como un objeto.
    const pacientes = [
      { id: 1, cedula: '123456789', nombre: 'Juan', apellido: 'Pérez', telefono: '123-456-7890', correo: 'juan@example.com' },
      // Agrega más pacientes según sea necesario
    ];
  
    function abrirPestanaDetalle(_id: number): void {
        throw new Error("Function not implemented.");
    }

    return (
      <> <Navbar/> <div className="container-fluid" style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
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
            </tr>
          </thead>
          <tbody className="text-center">
            {pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.cedula}</td>
                <td>{paciente.nombre}</td>
                <td>{paciente.apellido}</td>
                <td>{paciente.telefono}</td>
                <td>{paciente.correo}</td>
                <td>
                <a
                  href=""
                  onClick={() => abrirPestanaDetalle(paciente.id)}
                  className="btn btn-link"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Ver Detalles"
                >
                  Ver detalle
                </a>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> </>
    );
  }