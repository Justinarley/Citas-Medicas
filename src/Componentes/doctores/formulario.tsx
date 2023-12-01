import { Navbar } from "../navbar"

export function Formulario() {
    return (
        <><Navbar /><div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card bg-light">
                        <div className="card-header bg-info text-white">
                            <h2 className="text-center">Formulario del Doctor</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="idFoto">Ingresa la foto del Doctor en formato PDF:</label>
                                    <input type="file" className="form-control" id="idFoto" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="idDoctor">ID del Doctor:</label>
                                    <input type="text" className="form-control" id="idDoctor" placeholder="Ingrese el ID del Doctor" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Ingrese el nombre del Doctor" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="apellidos">Apellidos:</label>
                                    <input type="text" className="form-control" id="apellidos" placeholder="Ingrese los apellidos del Doctor" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefono">Teléfono:</label>
                                    <input type="tel" className="form-control" id="telefono" placeholder="Ingrese el teléfono del Doctor" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="especialidad">Especialidad:</label>
                                    <input type="text" className="form-control" id="especialidad" placeholder="Ingrese la especialidad del Doctor" />
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
