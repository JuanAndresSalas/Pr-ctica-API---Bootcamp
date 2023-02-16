export class Producto{
    id = 0;
    nombre;
    precio;
    link;
    stock;
    etiqueta;
    descripcion;
    idSucursal;
    idCategoria;

    constructor(nombre,  precio, link, stock, etiqueta, descripcion, idCategoria, idSucursal){
        this.nombre = nombre;
        this.precio = precio;
        this.link = link;
        this.stock = stock;
        this.etiqueta = etiqueta;
        this.descripcion = descripcion;
        this.idCategoria = idCategoria;
        this.idSucursal = idSucursal;
    }
        // getters
        get nombre(){return this.nombre};
        get precio(){return this.precio};
        get link(){return this.link};
        get stock(){return this.stock};
        get etiqueta(){return this.etiqueta};
        get descripcion(){return this.descripcion};
        get idCategoria(){return this.idCategoria};
        get idSucursal(){return this.idSucursal};

        // setters
        setNombre(nombre){this.nombre = nombre};
        setPrecio(precio){this.precio = precio};
        setLink(link){this.link = link};
        setStock(stock){this.stock = stock};
        setEtiqueta(etiqueta){this.etiqueta = etiqueta};
        setDescripcion(descripcion){this.descripcion = descripcion};
        setIdCategoria(idCategoria){this.idCategoria = idCategoria};
        setIdSucursal(idSucursal){this.idSucursal = idSucursal};
        
   


    obtenerProductos(){
        return fetch("https://bsite.net/metalflap/td-producto")
        .then(response => response.json())
        .then(data => data.filter(productos => productos.idSucursal == 2))
}
    crearProducto(producto){
        fetch("https://bsite.net/metalflap/td-producto",
        {
            method: "POST",
            headers: {"content-type": "aplication/json"},
            body: JSON.stringify(producto)
        }
        )
}

    eliminarProducto(){
        fetch("https://bsite.net/metalflap/td-producto/$  {id}")
    }
}
