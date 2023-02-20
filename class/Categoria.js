export class Categoria {
    constructor() { }

    obtenerCategoria() {
        return fetch("https://bsite.net/metalflap/td-categoria")
            .then(response => response.json())
            .then(data => data)

    }

    obtenerProductos() {
        return fetch("https://bsite.net/metalflap/td-producto")
            .then(response => response.json())
            .then(data => data.filter(productos => productos.idSucursal == 2))
    }

    crearProducto(producto) {
        fetch("https://bsite.net/metalflap/td-producto",
            {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(producto)
            }
        ).then(alert("Producto creado con éxito"))
            .catch(error => console.log(error))
    }


    eliminarProducto(id) {
        fetch(`https://bsite.net/metalflap/td-producto/${id}`,
            {
                method: "DELETE",
            })
            .then(alert("Producto eliminado correctamente"))
            .catch(error => console.log(error))
    }

    // buscarProductoId(id) {
    //     return fetch(`https://bsite.net/metalflap/td-producto/${id}`,
    //         {
    //             method: "GET",
    //         })
    //             .then(response => response.json())
    //             // .then(data => data)
    //             .catch(error => console.log(error))
    // }

    // editarProducto(id) {
    //     fetch(`https://bsite.net/metalflap/td-producto/${id}`,
    //         {
    //             method: "PUT",
    //             headers: { "content-Type": "application/json" },
    //             body: JSON.stringify(id)
    //         }
    //     ).then(alert("Producto editado con éxito"))
    //         .catch(error => console.log(error))
    // }

}


