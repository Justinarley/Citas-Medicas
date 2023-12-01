import { Navbar } from "../navbar";

export function FormularioPaciente() {
    return (
      <><> <Navbar /></><div className="container mt-5 custom-border">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-light">
              <div className="card-header bg-info text-white">
                <h2 className="text-center">Registro de pacientes</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="Ci">CI:</label>
                    <input type="number" className="form-control" id="cI" placeholder="Ingrese la cedula del paciente" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="NombrePaciente">Nombre paciente:</label>
                    <input type="text" className="form-control" id="NombrePaciente" placeholder="Ingrese el nombre del paciente" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apellido">Apellido del Paciente:</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingrese el apellido del paciente" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Telefono">Teléfono:</label>
                    <input type="text" className="form-control" id="Telefono" placeholder="Ingrese el teléfono del paciente" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="direccion">Dirección:</label>
                    <input type="tel" className="form-control" id="direccion" placeholder="Ingrese la dirección del paciente" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emal">Correo electrónico:</label>
                    <input type="email" className="form-control" id="emal" placeholder="Ingrese el correo electrónico del paciente" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Fecha de nacimiento:</label>
                    <input type="date" className="form-control" id="date" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="antecedentes">Antecedentes médicos:</label>
                    <textarea className="form-control" id="antecedentes" placeholder="Ingrese los antecedentes médicos del paciente"></textarea>
                  </div>
                  <br />
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-success">Guardar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div></>
    );
  }