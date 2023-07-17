import Paciente from "./Paciente";
import { useEffect } from "react";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    useEffect(() =>{

        if(pacientes.length > 0){
            console.log("nuevo paciente");
        }
        
    }, [pacientes])
    
    return (
        
        <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        
        
        
        
        {pacientes && pacientes.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-center text-lg mt-5 mb-10">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
                </p>

                {
                    pacientes.map (paciente => (
                        <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                        />
                ))}
            
            </> //Retorno fragmento... ya que puedo devolver solo uno
            ) :
            <>
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-center text-lg mt-5 mb-10">
                    Agrega Pacientes {''}
                    <span className="text-indigo-600 font-bold text-xl">y apareceran aqui</span>
                </p>
            </>
            }
        

        </div>

    )

}

export default ListadoPacientes;