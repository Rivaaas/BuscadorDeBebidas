import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriaContext'
import { RecetaContext } from '../context/RecetaContext';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    });

    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetaContext);

    //Funcion para leer contenifod

    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form className='col-12'
                onSubmit={e => {
                    e.preventDefault();
                    buscarRecetas(busqueda);
                    guardarConsultar(true);
                }}>
                <fieldset className='text-center'>
                    <legend>
                        Busca bebidas por categoria o ingredientes
                    </legend>
                </fieldset>
                <div className='row mt-4'>
                    <div className='col-md-4'>
                        <input
                            name="ingrediente"
                            className='form-control'
                            type="text"
                            placeholder='Buscar por ingrediente'
                            onChange={obtenerDatosReceta}
                        />
                    </div>
                    <div className='col-md-4'>
                        <select className='form-control'
                            name="categoria"
                            onChange={obtenerDatosReceta}
                        >
                            {categorias.map(categoria => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-4'>
                        <input
                            className='btn btn-block btn-primary'
                            type="submit"
                            value="Buscar Bebida"
                        />
                    </div>

                </div>
            </form>
        </>
    )
}

export default Formulario