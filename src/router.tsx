import { Route, Routes } from "react-router-dom"
import { Login } from "./Componentes/login"
import { FormularioPaciente } from './Componentes/paciente/pacientes';
import { Formulario } from "./Componentes/doctores/formulario";
import {  TablaDoctores } from "./Componentes/doctores/tabladoctores";
import { TablaPaciente } from "./Componentes/paciente/tablapacientes";

export const AppRoutes = () =>{
    return (
        <Routes> 
            <Route path="/" element={<Login />}  />
            <Route path="/paciente" element={<FormularioPaciente />}  />
            <Route path="/doctor" element={<Formulario />}  />
            <Route path="/tabladoctores" element={<TablaDoctores />}  />
            <Route path="/tablapacientes" element={<TablaPaciente />}  />
        </Routes>
    )
}
