import { useEffect, useState } from 'react';
import { Navbar } from "./navbar";

type Cita = {
  id: number;
  nombre_paciente: string;
  apellido_paciente: string;
  fecha_hora: string;
  nombre_doctor: string;
  apellido_doctor: string;
  cedula_doctor: string;
  id_doctor: number;
  especialidad: string;
};

export function Calendario() {
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    async function obtenerCitas() {
      try {
        const response = await fetch('http://localhost:3000/obtener-citas');
        if (response.ok) {
          const data = await response.json();
          setCitas(data);
        } else {
          console.error('Error al obtener la lista de citas');
        }
      } catch (error) {
        console.error('Error en la conexión:', error);
      }
    }

    obtenerCitas();
  }, []);

  const formatearFechaHora = (fechaHora: string) => {
    const fecha = new Date(fechaHora);
    const fechaFormateada = fecha.toLocaleDateString('es-ES');
    const horaFormateada = fecha.toLocaleTimeString('es-ES');
    return `${fechaFormateada} ${horaFormateada}`;
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className=" text-center">Calendario de Citas</h2>
        <div className="row">
          {citas.map(cita => (
            <div key={cita.id} className="col-md-4 mb-4">
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <h5 className="card-title">{cita.nombre_paciente} {cita.apellido_paciente}</h5>
                  <p className="card-text">Fecha y Hora: {formatearFechaHora(cita.fecha_hora)}</p>
                  <p className="card-text">Doctor: {cita.nombre_doctor} {cita.apellido_doctor}</p>
                  <p className="card-text">Especialidad: {cita.especialidad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
