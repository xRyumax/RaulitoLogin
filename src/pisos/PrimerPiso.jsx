import React from "react";
import { Link } from "react-router-dom";
import '../style/PrimerPiso.css'

const PrimerPiso = () => {
    return (
      <div className="">
        <div className="contenedor-principal">
          <Link to='/dashboard/oficina/instituciones-privadas'>
            <div className="clase1">
              INSTITUCIONES PRIVADAS
            </div>
          </Link>
          <Link to='/dashboard/oficina/escalafon'>
            <div className="clase1">
              ESCALAFON
            </div>
          </Link>
          <Link to='/dashboard/oficina/planillas'>
            <div className="clase1">
              PLANILLAS
            </div>
          </Link>

          <div className="clase1">
            baño
          </div>
          <Link to='/dashboard/oficina/informatica'>
            <div className="clase1">
              INFORMATICA
            </div>
          </Link>
          <Link to='/dashboard/oficina/contabilidad'>
            <div className="clase1">
              <div ></div>
              CONTABILIDAD
            </div>
          </Link>
        </div>
        hola
        <div className="contenedor-principal">
          <div className="clase1">
            porteria
          </div>
          <Link to='/dashboard/oficina/escalafon'>
            <div className="clase1 escalafon">
              ESCALAFON
            </div>
          </Link>
          <Link to='/dashboard/oficina/pagaduria'>
            <div className="clase1 pagaduria">
              PAGADURIA
            </div>
          </Link>
          <Link to='/dashboard/oficina/nexus'>
            <div className="clase1 nexus">
              NEXUS
            </div>
          </Link>
          <Link to='/dashboard/oficina/deuda-social'>
            <div className="clase1 deuda-social">
              DEUDA SOCIAL
            </div>
          </Link>
          <div className="clase1">
            espacio
          </div>
          <Link to='/dashboard/oficina/sercretaria-personal'>
            <div className="clase1 clase2">
              SECRETARIA PERSONAL
            </div>
          </Link>
        </div>
        hola
        <div className="contenedor-principal">
          <div className="clase1">
            espacio
          </div>
          <div >
            <div className="clase1 deposito">
              deposito
            </div>
            <div className="clase1 null">
              a
            </div>
          </div>
          <div >
            <div className="clase1 deposito">
              caja
            </div>
            <div className="clase1 null">
              a
            </div>
          </div>
          <div className="clase1">
            espacio
          </div>
          <div >
            <div className="clase1 deposito">
              a
            </div>
            <div className="clase1 null">
              mesa de partes
            </div>
          </div>
          <div >
            <div className="clase1 deposito-2">
              deposito
            </div>
            <div className="clase1 null2">
              a
            </div>
            <div className="clase1 convivencia">
              convivencia
            </div>
            <div className="clase1 estadistica">
              estadistica
            </div>
          </div>
          <div className="clase1">
            espacio
          </div>
          <Link to='/dashboard/oficina/personal-proyectos'>
            <div className="clase1">
              PERSONAL PROYECTOS
            </div>
          </Link>
        </div>
        hola
        <div className="contenedor-principal">
          <div className="clase1">
            espacio
          </div>
          <div className="clase1 ">
              a
          </div>
          <Link to='/dashboard/oficina/secretaria-general'>
            <div className="clase1">
            SECRETARIA GENERAL
            </div>
          </Link>
          <Link to='/dashboard/oficina/planificacion'>
            <div className="clase1 planificacion-siagie">
              PLANIFICACION
            </div>
          </Link>
          <Link to='/dashboard/oficina/siagie'>
            <div className="clase1 planificacion-siagie">
              SIAGIE
            </div>
          </Link>
          <div className="clase1">
            espacio
          </div>
          <Link to='/dashboard/oficina/servicio-social'>
            <div className="clase1">
              SERVICIO SOCIAL
            </div>
          </Link>
        </div>
        <div className="contenedor-principal">
          <div className="clase1 cuadrado">
            kiosko
          </div>
          <div className="clase1 cuadrado">
            kiosko
          </div>
          <Link to='/dashboard/oficina/tesoreria'>
          <div className="clase1 tesoreria">
            TESORERIA
          </div>
        </Link>
          
        </div>
        <div className="contenedor-principal">
          <Link to='/dashboard/oficina/secretaria-general'>
            <div className="clase1">
              SECRETARIA GENERAL
            </div>
          </Link>
          <Link to='/dashboard/oficina/almacen'>
            <div className="clase1">
              ALMACEN
            </div>
          </Link>
          <Link to='/dashboard/oficina/presupuesto'>
            <div className="clase1 presupuesto-racionalizacion">
              PRESUPUESTO
            </div>
          </Link>
          <Link to='/dashboard/oficina/racionalizacion'>
            <div className="clase1 presupuesto-racionalizacion">
              RACIONALIZACION
            </div>
          </Link>
          <Link to='/dashboard/oficina/gestion-institucional'>
            <div className="clase1">
              GESTION INSTITUCIONAL
            </div>
          </Link>
          <div className="clase1">
            espacio
          </div>
          
          <Link to='/dashboard/oficina/cpa'>
            <div className="clase1 cpa">
              CPA
            </div>
          </Link>
          <Link to='/dashboard/oficina/deposito-informatica'>
            <div className="clase1 deposito-informatica">
              DEPOSITO INFORMATICA
            </div>
          </Link>
          
          
        </div>
        
      </div>
    )
}


export default PrimerPiso;