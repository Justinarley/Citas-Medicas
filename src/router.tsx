import { Route, Routes } from "react-router-dom";
import { Login } from "./Componentes/login";
import { FormularioPaciente } from './Componentes/paciente/pacientes';
import { Formulario } from "./Componentes/doctores/formulario";
import { TablaDoctores } from "./Componentes/doctores/tabladoctores";
import { TablaPaciente } from "./Componentes/paciente/tablapacientes";
import { Inicio } from "./Componentes/inicio";
import { PerfilPaciente } from "./Componentes/paciente/perfilpaciente"; // Asegúrate de importar el componente
import { Citas } from "./Componentes/cita";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/paciente" element={<FormularioPaciente />} />
      <Route path="/doctor" element={<Formulario />} />
      <Route path="/tabladoctores" element={<TablaDoctores />} />
      <Route path="/tablapacientes" element={<TablaPaciente />} />
      <Route path="/perfil-paciente/:ci" element={<PerfilPaciente />} />
      <Route path="/citas" element={<Citas />} />
    </Routes>
  );
};
