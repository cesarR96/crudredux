import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from  '../types'

import clienteAxios from '../config/axios'

//crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispath) => {
        dispath(agregarProducto())


        try {
            //insertar en la api
            await clienteAxios.post('/productos',producto)

            //si todo sale bien actualizar el state
            dispath(agregarProductoExito(producto))
        } catch (error) {
            console.log(error)
            // si hay un error cambiar el state
            dispath(agregarProductoError(true))
        }


    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})


//si el producto se guarda en la base de datos

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto

})

//si hubo un error

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado

})