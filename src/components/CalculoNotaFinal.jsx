import React, { useEffect, useState } from 'react';
//import axios from 'axios'
import { alertaSuccess, alertaError, alertaWarning } from '../Funciones';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';


const CalculoNotaFinal = () => {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [mensaje, setMensaje] = useState('');
  const [notaFinal, setNotaFinal] = useState(0);


  const calcularNotaFinal = () => {  
    

  const notaFinal = (nota1) + (nota2) + (nota3);


  //Validar que no se pasen del máximo permitido
  if (nota1>30){
    alertaError("La nota 1 no puede ser mayor a 30")
  }else if(nota2>30){
    alertaError("La nota 2 no puede ser mayor a 30")
  }else if (nota3>40){
    alertaError("La nota 1 no puede ser mayor a 40")
  }else{  


    if (notaFinal < 60) {
      setMensaje('Reprobado');
      alertaError("Usted ha sido Reprobado: " + notaFinal + "%")
      
    } else if (notaFinal < 80) {
      setMensaje('Bueno');
      alertaWarning("Su calificación es Buena: " + notaFinal + "%")
    } else if (notaFinal < 90) {
      setMensaje('Muy Bueno');
      alertaWarning("Su calificación es Muy Buena: " + notaFinal + "%")
    } else {
      setMensaje('Sobresaliente');
      alertaSuccess("Su calificación es Excelente: "+ notaFinal + "%")
    }
    };
  }


  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Ingresar Notas de los Parciales</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group mb-3">
              <label>Primer Parcial (30%)</label>
              <input
                type="number"
                className="form-control"
                value={nota1}
                onChange={(e) => setNota1(parseFloat(e.target.value) || 0)}
                max="30"
                placeholder="Ingresa la nota del primer parcial"
              />
            </div>
            <div className="form-group mb-3">
              <label>Segundo Parcial (30%)</label>
              <input
                type="number"
                className="form-control"
                value={nota2}
                onChange={(e) => setNota2(parseFloat(e.target.value) || 0)}
                max="30"
                placeholder="Ingresa la nota del segundo parcial"
              />
            </div>
            <div className="form-group mb-3">
              <label>Tercer Parcial (40%)</label>
              <input
                type="number"
                className="form-control"
                value={nota3}
                onChange={(e) => setNota3(parseFloat(e.target.value) || 0)}
                max="40"
                placeholder="Ingresa la nota del tercer parcial"
              />
            </div>
            <button type="button" className="btn btn-success btn-block" onClick={calcularNotaFinal}>
              Calcular Nota Final
            </button>
          </form>
          {mensaje && (
            <div className="alert alert-info mt-3">
              <h4>Resultado: {mensaje} </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculoNotaFinal;

