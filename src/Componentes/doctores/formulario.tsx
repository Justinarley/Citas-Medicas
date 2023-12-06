import { Navbar } from "../navbar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function FormularioMedico() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        cedula: '', // Nuevo campo
        nombre: '',
        apellidos: '',
        telefono: '',
        especialidad: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/registro-doctores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Registro exitoso');
                setFormData({
                    cedula: '', // Reinicia el nuevo campo
                    nombre: '',
                    apellidos: '',
                    telefono: '',
                    especialidad: '',
                });
                navigate('/tabladoctores');
            } else {
                console.error('Error en el registro');
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-light">
                            <div className="card-header bg-info text-white">
                                <h2 className="text-center">Registro de médicos</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="cedula">Cédula:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cedula"
                                            placeholder="Ingrese la cédula del médico"
                                            value={formData.cedula}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nombre"
                                            placeholder="Ingrese el nombre del médico"
                                            value={formData.nombre}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="apellidos">Apellidos:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="apellidos"
                                            placeholder="Ingrese los apellidos del médico"
                                            value={formData.apellidos}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono">Teléfono:</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telefono"
                                            placeholder="Ingrese el teléfono del médico"
                                            value={formData.telefono}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="especialidad">Especialidad:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="especialidad"
                                            placeholder="Ingrese la especialidad del médico"
                                            value={formData.especialidad}
                                            onChange={handleInputChange}
                                        />
                                    </div>
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
            </div>
        </>
    );
}
