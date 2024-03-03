/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import { useState, useEffect } from "react";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Filtros from "./components/Filtros";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState(
  localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );
  
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos])

  useEffect(() => {
    if(filtro){
      const gastosFiltrados = gastos.filter(g => g.categoria === filtro);
      setGastosFiltrados(gastosFiltrados);
    }

  }, [filtro]);




  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if(presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }

  },[]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if(gasto.id !== ""){
      const gastosActualizados = gastos.map(g => g.id === gasto.id ? gasto : g); //al parecer a veces si tabeo no lo pone xd

      setGastos(gastosActualizados);
      setGastoEditar({});

    } else {  
      gasto.fecha = Date.now();
      gasto.id = generarId();
      setGastos([...gastos, gasto]);
    }
    

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(g => g.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros 
            filtro={filtro}
            setFiltro={setFiltro}
            />
            <ListadoGastos 
            gastos={gastos} 
            setGastoEditar={setGastoEditar} 
            eliminarGasto={eliminarGasto}
            gastosFiltrados={gastosFiltrados}
            filtro={filtro}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
