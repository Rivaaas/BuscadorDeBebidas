import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
export const RecetaContext = createContext();

const RecetaProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        ingrediente: '',
        categoria: ''
    });
    const [consultar, guardarConsultar] = useState(false);
    const { ingrediente, categoria } = busqueda;

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${ingrediente}&c=${categoria}`
                
                const resultado = await axios.get(url);

                guardarRecetas(resultado.data.drinks);
            }
            obtenerRecetas();
        }

    }, [busqueda]);

    return (
        <RecetaContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetaContext.Provider>
    )
}

export default RecetaProvider