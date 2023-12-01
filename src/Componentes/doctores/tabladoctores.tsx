import { Navbar } from "../navbar";

export function TablaDoctores() {
  // Supongamos que tienes una lista de doctores, cada uno representado como un objeto.
  const doctores = [
    { id: 1, nombre: 'Dr. Carlos', apellidos: 'Gómez', telefono: '987-654-3210', especialidad: 'Cardiología' },
    // Agrega más doctores según sea necesario
  ];

  function abrirPestanaDetalleDoctor(_id: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <> <Navbar/><div className="container-fluid" style={{ backgroundColor: '#87CEEB', padding: '20px' }}>
      <h2 style={{ fontStyle: 'italic', color: 'white' }}>Lista de Doctores</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark text-center">
          <tr>
            <th>ID del Doctor</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Teléfono</th>
            <th>Especialidad</th>
            <th>+</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {doctores.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.nombre}</td>
              <td>{doctor.apellidos}</td>
              <td>{doctor.telefono}</td>
              <td>{doctor.especialidad}</td>
              <td>
                <a
                  href=""
                  onClick={() => abrirPestanaDetalleDoctor(doctor.id)}
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
    </div></>
  );
}
