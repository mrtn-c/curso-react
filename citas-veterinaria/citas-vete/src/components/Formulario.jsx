import {useState, useEffect} from 'react';
import Error from './Error';

function Formulario({pacientes ,setPacientes, paciente, setPaciente}) {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const[error, setError] = useState(false)
    
    const generarId = () => {
        const fecha = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
        return fecha + random;


    }

    useEffect( () => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]) 

    const handleSubmit = (e) => {
        //validacion formulario...
        e.preventDefault()

        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log("falta un campo...")
            setError(true);
            return;
        }

        setError(false);

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            
        }

        console.log(paciente);

        if(paciente.id){
            //Editando
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
            setPacientes(pacientesActualizados);
            setPaciente({})


        }else {
            //nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }
        
        

        //reseteo de formulario. habra otra forma?
        setNombre('');
        setEmail('');
        setFecha('');
        setPropietario('')
        setSintomas('');


    }
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 ">
            <h2 className="font-black text-3xl text-center">Seguimiento </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}<span className="text-indigo-600 font-bold">administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 transition-all   ">
                {
                    error && <Error>Todos los Campos son Obligatorios</Error> 

                }
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota </label>
                    <input 
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>  

                <div className="mb-5">
                    <label htmlFor="propetario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input 
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <input 
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    />
                </div>


                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea 
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los Sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 p-3 w-full text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all mb-10"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}

                />
                    
               

            </form>

        </div>

    )

}

export default Formulario;