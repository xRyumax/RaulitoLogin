import React, { useState } from "react";
import { Link } from "react-router-dom";

import PrimerPiso from "../pisos/primerPiso";
import SegundoPiso from "../pisos/segundoPiso";

const Dashboard = () => {
  const [isSecondFloor, setIsSecondFloor] = useState(false);

  const toggleFloor = () => {
    setIsSecondFloor(!isSecondFloor);
  };
    return (
      <>
        <button onClick={toggleFloor}>
          {isSecondFloor ? "Ir a primer piso" : "Ir al segundo piso"}
        </button>

        <h3>inventario</h3>
        
        
        {isSecondFloor ? <SegundoPiso /> : <PrimerPiso />}
        {/*<PrimerPiso />*/}
      </>
      
    )
}

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)", // 5 columnas
    gap: "10px",
    padding: "20px",
  },
  officeBox: {
    border: "4px solid #ccc",
    textAlign: "center",
    height: "100px",
    cursor: "pointer",
  },
};

export default Dashboard;

