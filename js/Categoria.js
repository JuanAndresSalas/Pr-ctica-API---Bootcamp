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

    crearProducto(producto){
        console.log(producto)
        fetch("https://bsite.net/metalflap/td-producto",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:   JSON.stringify(producto)
            }
        )
    }


}