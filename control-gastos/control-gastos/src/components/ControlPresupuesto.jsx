/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ gastos, 
  presupuesto,
  setPresupuesto,
  setGastos,
  setIsValidPresupuesto 
}) => {
  
    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    const handleResetApp = () => {
      const resultado = confirm("¿Deseas reiniciar los gastos?");
      if(resultado){
        setPresupuesto(0);
        setGastos([]);
        setIsValidPresupuesto(false);
      }
    };

    useEffect(() => {
        const totalGasto = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0);

        //calulco porcentaje
        const nuevoPorcentaje = (( (presupuesto - (presupuesto - totalGasto)) / presupuesto) * 100).toFixed(2);




        setGastado(totalGasto);
        setDisponible(presupuesto - totalGasto);

        setTimeout(() => {
          setPorcentaje(nuevoPorcentaje);
        }, 1000);


    }, [gastos, presupuesto]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-LA", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 1,
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar
        styles={buildStyles({
          pathColor: porcentaje > 100 ? '#dc2626' : '#3b82f6',
          trailColor: '#f5f5f5',
          textColor: porcentaje > 100 ? '#dc2626' : '#3b82f6'
        })} 
        value={porcentaje}
        text={`${porcentaje}% Gastado`}
      />
      <div className="contenido-presupuesto">
        <button className="reset-app"
        type="button"
        onClick={handleResetApp}>
          Resetear app
        </button>
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
