/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";
import CerrarModal from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal,setGastoEditar ,guardarGasto, gastoEditar }) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");

  const [id, setId] = useState("");

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("") || cantidad <= 0) {
      setMensaje('Todos los campos son obligatorios');
      setTimeout(() => {
        setMensaje('');
      }, 1500);
      return;
    }

    guardarGasto({nombre, cantidad, categoria, id, fecha});

  };

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Casa">Casa</option>
            <option value="Gastos">Varios</option>
            <option value="Salud">Salud</option>
            <option value="Subscripciones">Subscripciones</option>
            <option value="Ocio">Ocio</option>
          </select>
        </div>

        <input type="submit" value={gastoEditar.nombre ? "Editar Gasto" : "Añadir Gasto"} />
      </form>
    </div>
  );
};

export default Modal;
