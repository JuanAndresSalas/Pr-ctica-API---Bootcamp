export class Categoria{
    constructor(){}

    traerProductos(){
        return fetch("https://bsite.net/metalflap/td-producto")
        .then(response => response.json())
        .then(data => 
            data.filter(producto => producto.idSucursal == 2))
    }

    obtenerCategoria(){
        return fetch("https://bsite.net/metalflap/td-categoria")
        .then(response => response.json())
        .then(data => data)
    }

          


}