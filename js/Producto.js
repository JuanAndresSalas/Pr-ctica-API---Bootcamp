export class Producto{
    id = 0;
    nombre;
    precio;
    link;
    stock;
    etiqueta;
    descripcion;
    idCategoria;
    idSucursal;

    constructor(nombre,precio,link,stock,etiqueta,descripcion,idCategoria,idSucursal){
        this.nombre = nombre;
        this.precio = precio;
        this.link = link;
        this.stock = stock;
        this.etiqueta = etiqueta;
        this.descripcion = descripcion;
        this.idCategoria = idCategoria;
        this.idSucursal = idSucursal
    };

    get nombre(){return this.nombre};
    get precio(){return this.precio};
    get link(){return this.link};
    get stock(){return this.stock};
    get etiqueta(){return this.etiqueta};
    get descripcion(){return this.descripcion};
    get idCategoria(){return this.categoria};
    get idSucursal(){return this.sucursal};

    setNombre(nombre){this.nombre = nombre}
    setNombre(precio){this.precio = precio}
    setNombre(link){this.link = link}
    setNombre(stock){this.stock = stock}
    setNombre(etiqueta){this.etiqueta = etiqueta}
    setNombre(descipcion){this.descipcion = descipcion}
    setNombre(idCategoria){this.idCategoria = idCategoria}
    setNombre(idSucursal){this.idSucursal = idSucursal}

    
}