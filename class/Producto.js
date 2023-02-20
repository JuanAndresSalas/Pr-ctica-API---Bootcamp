export class Producto{
id =0;
nombre;
precio;
link;
stock;
etiqueta;
descripcion;
idCategoria;
idSucursal;


constructor(nombre,precio,link,stock,etiqueta,descripcion,idCategoria,idSucursal) {

this.nombre = nombre;
this.precio = precio;
this.link = link;
this.stock = stock ;
this.etiqueta= etiqueta;
this.descripcion = descripcion;
this.idCategoria = idCategoria;
this.idSucursal = idSucursal
}

get nombre(){return this.nombre};
get precio(){return this.precio};
get link(){return this.link};
get stock(){return this.stock};
get etiqueta(){return this.etiqueta};
get descripcion(){return this.descripcion};
get idCategoria(){return this.idCategoria};
get idSucursal(){return this.idSucursal};

setNombre(nombre){this.nombre = nombre}
setPrecio(precio){this.precio = precio}
setLink(link){this.link = link}
setStock(stock){this.stock = stock}
setEtiqueta(etiqueta){this.etiqueta = etiqueta}
setDescripcion(descripcion){this.descripcion = descripcion}
setIdCategoria(idCategoria){this.idCategoria = idCategoria}
setIdSucursal(idSucursal){this.idSucursal = idSucursal}



}