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

    //Constructor Creación Producto
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

   
    
    get id(){return this.id};
    get nombre(){return this.nombre};
    get precio(){return this.precio};
    get link(){return this.link};
    get stock(){return this.stock};
    get etiqueta(){return this.etiqueta};
    get descripcion(){return this.descripcion};
    get idCategoria(){return this.categoria};
    get idSucursal(){return this.sucursal};

    setID(id){this.id =id}
    setNombre(nombre){this.nombre = nombre}
    setPrecio(precio){this.precio = precio}
    setLink(link){this.link = link}
    setStock(stock){this.stock = stock}
    setEtiqueta(etiqueta){this.etiqueta = etiqueta}
    setDescripcion(descripcion){this.descipcion = descripcion}
    setIDCategoria(idCategoria){this.idCategoria = idCategoria}
    setIDSucursal(idSucursal){this.idSucursal = idSucursal}

    
}