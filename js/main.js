
import { Catalogo } from "../class/Catalogo.js"
import { Producto } from "../class/Producto.js"


//___VARIABLES____
export var catalogo = new Catalogo
var catalogoSucursal = await catalogo.obtenerCatalogo()


//___MOSTRAR FUNCIONES____
window.addEventListener('DOMContentLoaded', mostrarCatalogo());


//___FUNCIONES_____
//___Mostrar elementos___
function mostrarCatalogo() {

    catalogoSucursal.forEach(catalogo => {
        let tabla = document.createElement("tr")
        tabla.innerHTML = ` 
        <tr >
        <th scope="row">${catalogo.id}</th>
        <td>${catalogo.nombre}</td>
        <td>${catalogo.precio}</td>
        <td><img class="imagenProducto" src="${catalogo.link}" </td>                           
        <td>${catalogo.stock}</td>                           
        <td>${catalogo.etiqueta}</td>                           
        <td>${catalogo.descripcion}</td>
        <td><button value=${catalogo.id} class= "botonEditar btn btn-secondary" >Editar</button></td>
        <td><button value=${catalogo.id} class= "botonEliminar btn btn-secondary">Eliminar</button></td>
        </tr>
        
    `
        $("#cuerpoTabla").append(tabla)


    })
};

///Agregar producto

$("#botonAgregar").on("click", function () {
    window.open("/nuevoProducto.html", "_blank", "width:200px, heigh:300px");
})


//DEBO TOMAR LOS DATOS DEL IMPUT,PONERLOS EN UN ARREGLO, LUEGO EN UN OBJETO Y ENVIARLOS AL CATALOGO PARA QUE LOS POSTEE EN LA API
$("#formularioData").on("submit", event => {
    event.preventDefault();
    var dataInput = document.getElementsByClassName("data");
    console.log(dataInput)
    let producto = new Producto(dataInput.nombre.value, dataInput.precio.value, dataInput.link.value, dataInput.stock.value, dataInput.etiqueta.value, dataInput.descripcion.value, dataInput.idCategoria.value, dataInput.idSucursal.value)
    console.log(producto)

    catalogo.crearProducto(producto)

    alert("Has creado un producto")
});


//___ELIMINAR PRODUCTO____
document.querySelectorAll(".botonEliminar").forEach((element) => {

    element.addEventListener("click", function () {
        catalogo.eliminarProducto(this.value)
        alert("Producto Eliminado")
    })
})


//___VENTANA EDITAR___
document.querySelectorAll(".botonEditar").forEach((element) => {
    console.log(element.value)
    element.addEventListener("click", function() {
        localStorage.setItem("id", JSON.stringify(this.value))
        window.open("/editarProducto.html", "_blank", "width:200px, heigh:300px");
       
    })
    
    
})













