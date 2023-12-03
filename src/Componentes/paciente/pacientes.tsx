import { Navbar } from "../navbar";
import { useState } from 'react';

export function FormularioPaciente() {
  const [formData, setFormData] = useState({
    CI: '',
    NombrePaciente: '',
    ApellidoPaciente: '',
    Telefono: '',
    Direccion: '',
    CorreoElectronico: '',
    FechaNacimiento: '',
    AntecedentesMedicos: '',
  });

  const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/registro-pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Manejar la respuesta exitosa
        alert('Registro exitoso');
      } else {
        // Manejar errores
        console.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error en la conexión:', error);
    }
  };
    return (
      <> <Navbar /><div className="container mt-5 custom-border">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-light">
              <div className="card-header bg-info text-white">
                <h2 className="text-center">Registro de pacientes</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="Ci">CI:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="CI"
                      placeholder="Ingrese la cedula del paciente"
                      value={formData.CI}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="NombrePaciente">Nombre paciente:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="NombrePaciente"
                      placeholder="Ingrese el nombre del paciente"
                      value={formData.NombrePaciente}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ApellidoPaciente">Apellido del Paciente:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ApellidoPaciente"
                      placeholder="Ingrese el apellido del paciente"
                      value={formData.ApellidoPaciente}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Telefono">Teléfono:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Telefono"
                      placeholder="Ingrese el teléfono del paciente"
                      value={formData.Telefono}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="direccion">Dirección:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Direccion"
                      placeholder="Ingrese la dirección del paciente"
                      value={formData.Direccion}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="CorreoElectronico">Correo electrónico:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="CorreoElectronico"
                      placeholder="Ingrese el correo electrónico del paciente"
                      value={formData.CorreoElectronico}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="FechaNacimiento">Fecha de nacimiento:</label>
                    <input
                      type="date"
                      className="form-control"
                      id="FechaNacimiento"
                      value={formData.FechaNacimiento}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="AntecedentesMedicos">Antecedentes médicos:</label>
                    <textarea
                      className="form-control"
                      id="AntecedentesMedicos"
                      placeholder="Ingrese los antecedentes médicos del paciente"
                      value={formData.AntecedentesMedicos}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <br />
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-success">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></>
    );
  }