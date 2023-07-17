import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []); //Traigo todo del LocalStorage
  const [paciente, setPaciente] = useState({});

  //los UseEffect  ejecutan en el orden como esten en el codigo

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     console.log(pacientesLS);
      
  //   }
  //   obtenerLS();
  // }, []);

  /** Antes se hacia como arriba para traer el LocalStorage, ya no. 
   * Si intento eso renderiza dos veces por lo que sobreescribe siempre con un array vacio
   */


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    console.log(pacientesActualizados)
    setPacientes(pacientesActualizados);
  }
  
  return (
    <div className='container md:mx-auto mt-20'>
        <Header />
      <div className='mt-12 md:flex'>
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  ) 
}

export default App
