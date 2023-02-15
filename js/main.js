import {Categoria} from "../js/Categoria.js"
import {Producto} from "../js/Producto.js"

var categoria = new Categoria;

var inventario = await categoria.traerProductos();
var cat = await categoria.obtenerCategoria();

function listarProductos(inventario){
    inventario.forEach(producto => {
        let categoriaProducto;
        cat.forEach(element => {
            if(producto.idCategoria == element.id){
                categoriaProducto = element.nombre
            }
        });
        
        let fila = document.createElement("tr")
        fila.innerHTML = `  <th scope="row">
                                <td>${producto.nombre}</td>
                                <td>${producto.descripcion}</td>
                                <td>${producto.precio}</td>
                                <td>${categoriaProducto}</td>
                                <td>${producto.stock}</td> 
                                <td><img src="${producto.link}" alt="Imagen No Disponible"  style="height: 100px; max-width: 100px"></td>
                                <td>${producto.etiqueta}</td>
                                <td><button type="button" class="btnEditar btn btn-success" value="${producto.id}">Editar</button></td> 
                                <td><button type="button" class="btnEliminar btn btn-danger" value="${producto.id}">Eliminar</button></td> 
                            </th>  `
        $("#cuerpoTabla").append(fila)  
           
    });
}


listarProductos(inventario)

//Crear Producto

$("#crearProducto").on("click",function(){
    window.open("/html/creacion.html")    
})


cat.forEach(element =>{
    if(element.id == 9 || element.id == 4 || element.id == 3 || element.id == 2){
        let option = document.createElement("option");
        option.value = element.id;
        option.innerHTML = element.nombre;
        $("#categoria").append(option)
    }
    
})

$("#formCreacion").on("submit",event =>{
    event.preventDefault();
    var arrProdNuevo = document.getElementsByClassName("dato");
    let producto = new Producto(arrProdNuevo.nombre.value,arrProdNuevo.precio.value,arrProdNuevo.link.value,arrProdNuevo.stock.value,arrProdNuevo.etiqueta.value,arrProdNuevo.descripcion.value,arrProdNuevo.categoria.value,arrProdNuevo.sucursal.value)
    
    categoria.crearProducto(producto)
    alert("Producto Creado")
    
})

//Eliminar Producto

$(document).on("click",'button[type="button"]',function(){
    if(this.classList.contains("btnEliminar")){
        let id = this.value
        categoria.eliminarProducto(id)
        alert("Producto Eliminado")
        location.reload()
    }  
})

$(document).on("click",'button[type="button"]',function(){
    if(this.classList.contains("btnEliminar")){
        let id = this.value
        categoria.eliminarProducto(id)
        alert("Producto Eliminado")
        location.reload()
    }  
})


$(document).on("click",'button[type="button"]',function(){
    if(this.classList.contains("btnEditar")){
        let id = this.value
        console.log(id)
    }  
})




