import { Producto } from "./class/Producto.js"
import { Categoria } from "./class/Categoria.js"
const producto = new Producto()
const categoria = new Categoria()

var catalogo = await producto.obtenerProductos()
var categoria1 = await categoria.obtenerCategoria()

console.log(categoria1)


function mostrarProductos() {

    catalogo.forEach(producto => {
        let filaPdtos = document.createElement("tr");
        filaPdtos.innerHTML =
            `<th>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.descripcion}</td>
                <td>${producto.precio}</td>
                <td><img src="${producto.link}" style="height: 100px;"></td>
                <td>${producto.etiqueta}</td>
                <td>${producto.stock}</td>
                <td><button class="btn btn-success" id="btnEditar_${producto.id}">Editar</button></td>
                <td><button class="btn btn-danger" id="btnEliminar_${producto.id}">Eliminar</button></td>
            </th>`

        $("#filasPdtos").append(filaPdtos)
    })

}
mostrarProductos()

$("#btnEditar").on("click", function () {
    window.open("./formulario.html", "_blank", "width:500px, height:500px");
})

categoria1.forEach(element => {
    if (element.id == 2 || element.id == 3 || element.id == 4 || element.id == 9) {
        let option = document.createElement("option");
        option.value = element.id;
        console.log(option.value)
        console.log(element.id)
        option.innerHTML = element.nombre;
        console.log(element.nombre)
        $("#categoria").append(option)
    }
})

$("formCreatePdto").on("submit", event => {
    event.preventDefault();

    let datosForm = document.getElementsByClassName("dato");
    const pdto = new Producto(datosForm.nombre.value, datosForm.precio.value, datosForm.link.value, datosForm.stock.value, datosForm.etiqueta.value, datosForm.descripcion.value, datosForm.idCategoria.value, datosForm.idSucursal.value)
    console.log(pdto)
    console.log(datosForm)

    producto.crearProducto(producto)

})