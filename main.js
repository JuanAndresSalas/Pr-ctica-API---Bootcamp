import { Producto } from "./class/Producto.js"
import { Categoria } from "./class/Categoria.js"

const categoria = new Categoria()

// OBTENER PRODUCTOS Y CATEGORÍAS DESDE LA API
var catalogo = await categoria.obtenerProductos()
var categoria1 = await categoria.obtenerCategoria()
// var id = JSON.parse(localStorage.getItem("id"))
// localStorage.removeItem("id")
// var productoId = await categoria.buscarProductoId(id)[0];
// console.log(await categoria.buscarProductoId(id)[0])

// MOSTRAR PRODUCTOS EN EL MANTENEDOR
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
                <td><button class="btn btn-success btnFormEditar" type="button"id="btnFormEditar_${producto.id}">Editar</button></td>
                <td><button class="btn btn-danger btnEliminar" type="button" value="${producto.id}">Eliminar</button></td>
            </th>`

        $("#filasPdtos").append(filaPdtos)
        
    })
   
}
mostrarProductos()



// ABRIR FORMULARIO CREACIÓN PRODUCTO
$("#btnEditar").on("click", function () {
    window.open("./formulario.html", "_blank", "width:500px, height:500px");
    // console.log($("#formCreatePdto").show())
})



// SELECCIONAR CATEGORÍAS DE NUESTRO EQUIPO PARA SELECT
categoria1.forEach(element => {
    if (element.id == 2 || element.id == 3 || element.id == 4 || element.id == 9) {
        let option = document.createElement("option");
        option.value = element.id;
        option.innerHTML = element.nombre;
        $("#categoria").append(option)
        $(".categoriaEdit").append(option)
    }
})

// CREAR PRODUCTO

$("#formCreatePdto").on("submit", event => {

    event.preventDefault();

    var datosForm = document.getElementsByClassName("dato");
    let producto = new Producto(datosForm.nombre.value, datosForm.precio.value, datosForm.link.value, datosForm.stock.value, datosForm.etiqueta.value, datosForm.descripcion.value, datosForm.categoria.value, datosForm.sucursal.value)

    categoria.crearProducto(producto)
    location.reload(true)

})

// ELIMINAR PRODUCTO
$(document).on("click", 'button[type="button"]', function () {
    if (this.classList.contains("btnEliminar")) {
        categoria.eliminarProducto(this.value)
    }
})

// ABRIR FORMULARIO EDICIÓN PRODUCTO
// $(document).on("click", "button[type='button']", function () {
//     if (this.classList.contains("btnFormEditar")) {
//         window.open("./formulario.html", "_blank", "width:500px, height:500px");
//        $("#formEditPdto").show()
      
//         $("#nombreEdit").val(productoId.nombre);
//         $("#precioEdit").val(productoId.precio);
//         $("#linkEdit").val(productoId.link);
//         $("#stockEdit").val(productoId.stock);
//         $("#etiquetaEdit").val(productoId.etiqueta);
//         $("#descripcionEdit").val(productoId.descripcion);
//         $("#categoriaEdit").val(productoId.categoria);
//         $("#sucursalEdit").val(productoId.sucursal);

//         $("#submitEdit").on("click", event => {
//             let datoEdit = document.getElementsByClassName("datoEdit");
//             let prodEdit = new Producto (datoEdit.nombre, datoEdit.precio, datoEdit.link, datoEdit.stock, datoEdit.descripcion, datoEdit.etiqueta, datoEdit.categoria, datoEdit.sucursal)
//             prodEdit.setID(parseInt(id))
//             categoria.editarProducto(id)})
        
//         location.reload()
//     }
// })