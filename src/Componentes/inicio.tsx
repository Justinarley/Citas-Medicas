import { Navbar } from "./navbar";
import Inicio1 from "../assets/Imagenes/inicio1.jpg";
import Inicio2 from "../assets/Imagenes/inicio2.jpg";

export function Inicio() {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                {/* Primera sección */}
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={Inicio1}
                            alt="Imagen Clínica Dental 1"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="text-left">
                            <h2>Bienvenida, Secretaria</h2>
                            <p>
                                ¡Gracias por ser parte de nuestro equipo en la Clínica Dental!
                                Tu papel es crucial para el buen funcionamiento de nuestras
                                operaciones.
                            </p>
                            <p>
                                Como secretaria, te encargarás de gestionar las citas,
                                coordinar con el personal y proporcionar información valiosa a
                                nuestros pacientes. Estamos aquí para apoyarte en todo momento.
                            </p>
                            <p>
                                Si tienes alguna pregunta o necesitas asistencia, no dudes en
                                comunicarte con el equipo administrativo. ¡Bienvenida de nuevo!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Segunda sección */}
                <div className="row mt-4">
                    <div className="col-md-6 order-md-2">
                        <img
                            src={Inicio2}
                            alt="Imagen Clínica Dental 2"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <div className="text-left">
                            <h2>Mayor Informacio</h2>
                            <p>
                                En nuestra clínica, nos esforzamos por proporcionar un ambiente cálido y
                                acogedor para nuestros pacientes. Nuestro equipo de profesionales
                                altamente capacitados se dedica a ofrecer servicios dentales de calidad
                                utilizando las últimas tecnologías y enfoques.
                            </p>
                            <p>
                                Nos especializamos en tratamientos preventivos, restaurativos y estéticos,
                                abordando las necesidades individuales de cada paciente. Tu salud bucal
                                es nuestra prioridad, y trabajamos para crear sonrisas saludables y
                                hermosas.
                            </p>
                            {/* Agrega más contenido según sea necesario */}
                        </div>
                    </div>
                </div>

                {/* Misión y Visión */}
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="text-center bg-dark p-4 text-white">
                            <h2>Misión</h2>
                            <p>
                                Nuestra misión es proporcionar atención dental de calidad,
                                centrada en el paciente, con un enfoque en la prevención y el
                                bienestar oral. Buscamos ser líderes en la industria dental,
                                brindando servicios excepcionales y creando sonrisas saludables
                                para toda la comunidad.
                            </p>
                            <h2>Visión</h2>
                            <p>
                                La visión de nuestra clínica es ser reconocidos como el referente
                                de excelencia en servicios odontológicos, superando las
                                expectativas de nuestros pacientes y estableciendo estándares
                                elevados para la atención dental integral.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}