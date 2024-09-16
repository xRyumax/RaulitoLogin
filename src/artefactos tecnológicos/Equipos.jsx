import React from 'react';
import { useLocation } from 'react-router-dom';

const Equipos = () => {
  const location = useLocation();
  const { id, name, info } = location.state || {}; // Maneja el caso de que no haya datos

  return (
    <div>
      <h2>Destino</h2>
      {name ? (
        <div>
          <p>ID: {id}</p>
          <p>Nombre: {name}</p>
          <p>Información: {info}</p>
        </div>
      ) : (
        <p>No hay datos para mostrar.</p>
      )}
    </div>
  );
};

export default Equipos;
