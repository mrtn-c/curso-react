import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
    }

`


// eslint-disable-next-line react/prop-types
const Formulario = ({setMonedas}) => {


    const [ error, setError ] = useState(false) 
    const [ criptos, setCriptos ] = useState([]) 
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas); //Es por indice, no por nombre!
    const [ criptoMoneda, SelectCriptoMonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos); 

    useEffect(() => {
        const consultarApi = async() =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arraycriptos = resultado.Data.map((cripto) => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto;
            });
            setCriptos(arraycriptos);
        }
        consultarApi();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if([moneda, criptoMoneda].includes('')){
            setError(true)
            return;
        }
        setError(false);
        setMonedas({
            moneda,
            criptoMoneda
        })

    }

  return (
    
    <>
        {error && <Error> Todos los campos son obligatorios </Error>}
    <form
        onSubmit={handleSubmit}
    >

        <SelectMonedas />
        <SelectCriptoMonedas />

        

        <InputSubmit type='submit' value="Cotizar" />
    </form>
    </>
  )
}

export default Formulario