import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Contabilidad from './components-office/Contabilidad'
import SecretariaPersonal from './components-office/SecretariaPersonal';
import PersonalProyectos from './components-office/PersonalProyectos';
import ServicioSocial from './components-office/ServicioSocial';
import Tesoreria from './components-office/Tesoreria';
import DepositoInformatica from './components-office/DepositoInformatica';
import Informatica from './components-office/Informatica';
import GestionInstitucional from './components-office/GestionInstitucional';
import InstitucionesPrivadas from './components-office/InstitucionesPrivadas';
import Planillas from './components-office/Planillas';
import Escalafon from './components-office/Escalafon';
import Pagaduria from './components-office/Pagaduria';
import Nexus from './components-office/Nexus';
import DeudaSocial from './components-office/DeudaSocial';
import SecretariaGeneral from './components-office/SecretariaGeneral';
import Planificacion from './components-office/Planificacion';
import Siagie from './components-office/Siagie';
import Almacen from './components-office/Almacen';
import Presupuesto from './components-office/Presupuesto';
import Racionalizacion from './components-office/Racionalizacion';
import CPA from './components-office/CPA';


import Deposito from './components-office-piso2/Deposito';
import Auditorio from './components-office-piso2/Auditorio';
import AsesoriaJuridica from './components-office-piso2/AsesoriaJuridica';
import ControlInstitucional from './components-office-piso2/ControlInstitucional';
import AGPsecundaria from './components-office-piso2/AGPsecundaria';
import RecibidorDireccion from './components-office-piso2/RecibidorDireccion';
import RelacionesPublicas from './components-office-piso2/RelacionesPublicas';
import AGPpecud from './components-office-piso2/AGPpecud';
import JefaturaAGP from './components-office-piso2/JefaturaAGP';
import SalaDeReunionesAGP from './components-office-piso2/SalaDeReunionesAGP';
import SecretariaAGP from './components-office-piso2/SecretariaAGP';
import AGPprimaria from './components-office-piso2/AGPprimaria';
import AGPinicial from './components-office-piso2/AGPinicial';
import SecretariaDeDireccion from './components-office-piso2/SecretariaDeDireccion';
import JefaturaDeDireccion from './components-office-piso2/JefaturaDeDireccion';
import SalaConferenciasDireccion from './components-office-piso2/SalaConferenciasDireccion';
import JefaturaAdministracion from './components-office-piso2/JefaturaAdministracion';
import SecretariaAdministracion from './components-office-piso2/SecretariaAdministracion';
import Pela from './components-office-piso2/Pela';
import ControlPatrimonial from './components-office-piso2/ControlPatrimonial';
import Infraestructura from './components-office-piso2/Infraestructura';
import JefaturaAbastecimientos from './components-office-piso2/JefaturaAbastecimientos';
import Abastecimiento from './components-office-piso2/Abastecimiento';
import Equipos from './artefactos tecnológicos/Equipos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/oficina/contabilidad" element={<Contabilidad />} />
        <Route path="/dashboard/oficina/sercretaria-personal" element={<SecretariaPersonal />} />
        <Route path="/dashboard/oficina/personal-proyectos" element={<PersonalProyectos />} />
        <Route path="/dashboard/oficina/servicio-social" element={<ServicioSocial />} />
        <Route path="/dashboard/oficina/tesoreria" element={<Tesoreria />} />
        <Route path="/dashboard/oficina/deposito-informatica" element={<DepositoInformatica />} />
        <Route path="/dashboard/oficina/informatica" element={<Informatica />} />
        <Route path="/dashboard/oficina/gestion-institucional" element={<GestionInstitucional />} />
        <Route path="/dashboard/oficina/instituciones-privadas" element={<InstitucionesPrivadas />} />
        <Route path="/dashboard/oficina/planillas" element={<Planillas />} />
        <Route path="/dashboard/oficina/escalafon" element={<Escalafon />} />
        <Route path="/dashboard/oficina/pagaduria" element={<Pagaduria />} />
        <Route path="/dashboard/oficina/nexus" element={<Nexus />} />
        <Route path="/dashboard/oficina/deuda-social" element={<DeudaSocial />} />
        <Route path="/dashboard/oficina/secretaria-general" element={<SecretariaGeneral />} />
        <Route path="/dashboard/oficina/planificacion" element={<Planificacion />} />
        <Route path="/dashboard/oficina/siagie" element={<Siagie />} />
        <Route path="/dashboard/oficina/secretaria-general" element={<SecretariaGeneral />} />
        <Route path="/dashboard/oficina/almacen" element={<Almacen />} />
        <Route path="/dashboard/oficina/presupuesto" element={<Presupuesto />} />
        <Route path="/dashboard/oficina/racionalizacion" element={<Racionalizacion />} />
        <Route path="/dashboard/oficina/cpa" element={<CPA />} />


        <Route path="/dashboard/oficina/deposito" element={<Deposito />} />
        <Route path="/dashboard/oficina/auditorio" element={<Auditorio />} />
        <Route path="/dashboard/oficina/asesoria-juridica" element={<AsesoriaJuridica />} />
        <Route path="/dashboard/oficina/control-institucional" element={<ControlInstitucional />} />
        <Route path="/dashboard/oficina/agp-secundaria" element={<AGPsecundaria />} />
        <Route path="/dashboard/oficina/recibidor-direccion" element={<RecibidorDireccion />} />
        <Route path="/dashboard/oficina/relaciones-publicas" element={<RelacionesPublicas />} />
        <Route path="/dashboard/oficina/agp-pecud" element={<AGPpecud />} />
        <Route path="/dashboard/oficina/jefatura-agp" element={<JefaturaAGP />} />
        <Route path="/dashboard/oficina/sala-reuniones-agp" element={<SalaDeReunionesAGP />} />
        <Route path="/dashboard/oficina/secretaria-agp" element={<SecretariaAGP />} />
        <Route path="/dashboard/oficina/agp-primaria" element={<AGPprimaria />} />
        <Route path="/dashboard/oficina/agp-inicial" element={<AGPinicial />} />
        <Route path="/dashboard/oficina/secretaria-direccion" element={<SecretariaDeDireccion />} />
        <Route path="/dashboard/oficina/jefatura-direccion" element={<JefaturaDeDireccion />} />
        <Route path="/dashboard/oficina/sala-conferencia-direccion" element={<SalaConferenciasDireccion />} />
        <Route path="/dashboard/oficina/jefatura-administracion" element={<JefaturaAdministracion />} />
        <Route path="/dashboard/oficina/secretaria-administracion" element={<SecretariaAdministracion />} />
        <Route path="/dashboard/oficina/pela" element={<Pela />} />
        <Route path="/dashboard/oficina/control-patrimonial" element={<ControlPatrimonial />} />
        <Route path="/dashboard/oficina/infraestructura" element={<Infraestructura />} />
        <Route path="/dashboard/oficina/jefatura-abastecimiento" element={<JefaturaAbastecimientos />} />
        <Route path="/dashboard/oficina/abastecimiento" element={<Abastecimiento />} />
        
        <Route path="/dashboard/oficina/deposito-informatica/equipos" element={<Equipos />} />
        <Route path="" element={<Login />} />
        <Route path="" element={<Login />} />
        <Route path="" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
