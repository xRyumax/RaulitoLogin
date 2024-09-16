import React, { useState } from 'react';
import '../style/Informatica.css'
import { useNavigate } from 'react-router-dom';

// Componente para cada cuadradito
const Cuadradito = ({ name, onClick }) => {
  return (
    <div className="cuadradito" onClick={onClick}>
      <span>{name}</span>
    </div>
  );
};

// Componente principal
const Informatica = () => {
  const [selectedData, setSelectedData] = useState(null);

  const cuadraditosData = [
    { id: 1, name: 'Nombre 1', info: 'Información del cuadradito 1' },
    { id: 2, name: 'Nombre 2', info: 'Información del cuadradito 2' },
    { id: 3, name: 'Nombre 3', info: 'Información del cuadradito 3' },
    // Añade más datos según sea necesario
  ];

  const handleCuadraditoClick = (data) => {
    setSelectedData(data);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  const navigate = useNavigate();

  const handleCuadraditoClick2 = () => {
    const cuadraditoData = {
      id: 1,
      name: 'Cuadradito 1',
      info: 'Datos del cuadradito 1',
    };

    // Redirigir a "/destino" y enviar datos como estado
    navigate('/dashboard/oficina/deposito-informatica/equipos', { state: cuadraditoData });
  };

  return (
    <div>
      <div>
        <h2>Home</h2>
        <div className="cuadradito" onClick={handleCuadraditoClick2}>
          Cuadradito
        </div>
      </div>
      <div className="container">
        {cuadraditosData.map((cuadradito) => (
          <Cuadradito
            key={cuadradito.id}
            name={cuadradito.name}
            onClick={() => handleCuadraditoClick(cuadradito)}
          />
        ))}

        {selectedData && (
          <div className="modal">
            <div className="modal-content">
              <h2>{selectedData.name}</h2>
              <p>{selectedData.info}</p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>

  );
};

export default Informatica;
