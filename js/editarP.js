
import { Catalogo } from "../class/Catalogo.js";
import { Producto } from "../class/Producto.js";

//conseguir el dato ID
let productoEdit= new Catalogo
var idEdit = JSON.parse(localStorage.getItem("id"))


var productoSeleccionado = await productoEdit.obtenerProducto(idEdit)


 //console.log(productoSeleccionado[0]) /// revisarlo
window.addEventListener('DOMContentLoaded',mostrarProducto());

//___Mostrar producto___
 function mostrarProducto () {

    productoSeleccionado.forEach(element => {
         let formulario = document.createElement("div")
             formulario.innerHTML = 
             ` 
             <form id="editarData" style="display:grid">
                <input class="data" id="nombre" type="text" name="fname" placeholder=${element.nombre} required>
                <input class="data" id="precio" type="number" name="fname" placeholder=${element.precio} required>
                <input class="data" id="link" type="text" name="fname" placeholder=${element.link} required>
                <input class="data" id="stock" type="number" name="fname" placeholder=${element.stock} required>
                <input class="data" id="etiqueta" type="text" name="fname" placeholder=${element.etiqueta} required>
                <textarea class="data" id="descripcion" type="text" name="fname" placeholder=${element.descripcion} required cols="4" rows="5"></textarea>
                <label for="categoria">Selecciona la categoria</label>
                <select class="data" id="idCategoria" type="text" name="categoria" placeholder=${element.categoria} select>
                    <option value="2">Tecnología</option>
                    <option value="3">Videojuegos</option>
                    <option value="4">Menaje</option>
                    <option value="9">Mobiliaro</option>
                </select>
                <label for="sucursal">Sucursal</label> 
                <input class="data" id="idSucursal" type="text" name="sucursal" placeholder="Id Sucursal" value="2" disabled>
                <button type="submit" class="btn-dark">Agregar producto</button>
                </form>
                `
            $("#divData").append(formulario)

    
     });
 }

