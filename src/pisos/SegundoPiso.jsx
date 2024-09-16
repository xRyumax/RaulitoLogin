import React from "react";
import { Link } from "react-router-dom";
import '../style/SegundoPiso.css'

const SegundoPiso = () => {
   return (
      <div>
        <div>
          <div className="contenedor-principal">
            <div>
              <Link to='/dashboard/oficina/deposito'>
                <div className="clase1 deposito">
                  DEPOSITO
                </div>
              </Link>
              <div className="clase1 deposito">
                ÑOBA
              </div>
            </div>
            
            <Link to='/dashboard/oficina/auditorio'>
              <div className="clase1">
                AUDITORIO
              </div>
            </Link>
            <Link to='/dashboard/oficina/asesoria-juridica'>
              <div className="clase1">
                ASESORIA JURIDICA
              </div>
            </Link>

            <Link to='/dashboard/oficina/control-institucional'>
              <div className="clase1">
                Control Institucional
              </div>
            </Link>
          </div>
          hola
          <div className="contenedor-principal">

              
            <div className="clase1">
              ESPACIO
            </div>

            <div>
              <Link to='/dashboard/oficina/agp-secundaria'>
                <div className="clase1">
                  AGP SECUNDARIA
                </div>
              </Link>
              <div className="minicontenedor">
                <Link to='/dashboard/oficina/agp-pecud'>
                  <div className="clase1 prueba3">
                    AGP PECUD
                  </div>
                </Link>
                <Link to='/dashboard/oficina/auditorio'>
                  <div className="clase1 prueba3">
                    a
                  </div>
                </Link>
              </div>
              <div className="minicontenedor">
                <Link to='/dashboard/oficina/jefatura-agp'>
                  <div className="clase1 prueba3">
                    JEFATURA AGP
                  </div>
                </Link>
                <Link to='/dashboard/oficina/sala-reuniones-agp'>
                  <div className="clase1 prueba3">
                    SALA DE REUNIONES AGP
                  </div>
                </Link>
              </div>
              <div className="minicontenedor">
                <Link to='/dashboard/oficina/auditorio'>
                  <div className="clase1 prueba3">
                    a
                  </div>
                </Link>
                <Link to='/dashboard/oficina/secretaria-agp'>
                  <div className="clase1 prueba3">
                    SECRETARIA AGP
                  </div>
                </Link>
              </div>
              
              
            </div>
            
            <div className="clase1">
              ESPACIO
            </div>
            <div>
              <Link to='/dashboard/oficina/asesoria-juridica'>
                <div className="clase1">
                  S.H AGP
                </div>
              </Link>
              <Link to='/dashboard/oficina/agp-primaria'>
                <div className="clase1">
                  AGP PRIMARIA
                </div>
              </Link>
              <Link to='/dashboard/oficina/agp-inicial'>
                <div className="clase1">
                  AGP INICIAL
                </div>
              </Link>
            </div>
            
            
            <div className="clase1">
              ESPACIO
            </div>
            <div>
              <div className="minicontenedor">
                <Link to='/dashboard/oficina/recibidor-direccion'>
                  <div className="clase1 recibidor-relaciones">
                    RECIBIDOR DIRECCION
                  </div>
                </Link>
                <Link to='/dashboard/oficina/relaciones-publicas'>
                  <div className="clase1 recibidor-relaciones">
                    RELACIONES PUBLICAS
                  </div>
                </Link>
              </div>
              <Link to='/dashboard/oficina/secretaria-direccion'>
                <div className="clase1">
                  SECRETARIA DE DIRECCION
                </div>
              </Link>
              <div className="minicontenedor">
                <Link to='/dashboard/oficina/jefatura-direccion'>
                  <div className="clase1 recibidor-relaciones">
                    JEFATURA DE DIRECCION
                  </div>
                </Link>
                <Link to='/dashboard/oficina/relaciones-publicas'>
                  <div className="clase1 recibidor-relaciones">
                    S.H. DIRECCION
                  </div>
                </Link>
              </div>
              <Link to='/dashboard/oficina/sala-conferencia-direccion'>
                <div className="clase1">
                  SALA CONFERENCIAS DIRECCION
                </div>
              </Link>
              <Link to='/dashboard/oficina/jefatura-administracion'>
                <div className="clase1">
                  JEFATURA ADMINISTRACION
                </div>
              </Link>
              <div className="minicontenedor">
                <Link to='/dashboard/oficina/secretaria-administracion'>
                  <div className="clase1 recibidor-relaciones">
                    SECRETARIA ADMINISTRACION
                  </div>
                </Link>
                <Link to='/dashboard/oficina/relaciones-publicas'>
                  <div className="clase1 recibidor-relaciones">
                    A
                  </div>
                </Link>
              </div>
            </div>
            
          </div>
          hola
          <div className="contenedor-principal">
            <Link to='/dashboard/oficina/auditorio'>
              <div className="clase1 componente3">
                SUM COMEDOR
              </div>
            </Link>
            
            <Link to='/dashboard/oficina/pela'>
              <div className="clase1 componente3">
                PELA
              </div>
            </Link>
            <Link to='/dashboard/oficina/control-patrimonial'>
              <div className="clase1 componente3">
                CONTROL PATRIMONIAL
              </div>
            </Link>

            <Link to='/dashboard/oficina/infraestructura'>
              <div className="clase1 componente3">
                INFRAESTRUCTURA
              </div>
            </Link>

              <div className="clase1 componente3">
                ESTAPCIO
              </div>

              <div className="clase1 componente3">
                ÑOBA
              </div>


              <div className="clase1 componente3">
                ESPACIO
              </div>

            <Link to='/dashboard/oficina/jefatura-abastecimiento'>
              <div className="clase1 componente3">
                JEFATURA ABASTECIMIENTO
              </div>
            </Link>
            <Link to='/dashboard/oficina/abastecimiento'>
              <div className="clase1 componente3">
                ABASTECIMIENTO
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
}


export default SegundoPiso;