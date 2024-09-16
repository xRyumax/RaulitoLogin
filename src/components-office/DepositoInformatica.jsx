import React, { useEffect, useState } from "react";
import { Modal, Form } from 'antd';
import axios from 'axios';
import { Link } from "react-router-dom";

const DepositoInformatica = () => {
  const [cpuData, setCpuData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
    console.log(cpuData);
    
    useEffect(() => {
      getCpuData();
    }, []);
    const getCpuData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cpu');
        console.log(response.data.data);
        
        setCpuData(response.data.data);
        return response.data;
      } catch (error) {
        console.error('Error al obtener los datos de CPU:', error);
        return null;
      }
    };
    const mostrarInterfaz = () => {
      setIsModalVisible(true);
      
    }
    return (
      <div>
      <h2>Lista de CPUs</h2>
      
      <Link to='/dashboard/oficina/deposito-informatica/mouse'>
        <div className="cuadradito" >
          cpu
        </div>
      </Link>
      <div className="cuadradito" onClick={mostrarInterfaz}>
        cpu
      </div>

      <Modal
        title="Edit User"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          
        >
          <h3>hola</h3>
        </Form>
      </Modal>
    </div>
    )
}


export default DepositoInformatica;