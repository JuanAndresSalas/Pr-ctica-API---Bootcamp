import { Categoria } from "./Categoria.js";
import {Producto} from "../js/Producto.js"

var catEdit = new Categoria;
var categorias = await catEdit.obtenerCategoria();
var id = JSON.parse(localStorage.getItem("id"))
localStorage.removeItem("id")
var prodEdicion = (await catEdit.buscarProducto(id))[0] //Respuesta es un arreglo, por eso accedo al indice [0]  para obtener el producto


//Mostrar info del producto en los input

$("#nombreEdit").val(prodEdicion.nombre);
$("#precioEdit").val(prodEdicion.precio);
$("#linkEdit").val(prodEdicion.link);
$("#stockEdit").val(prodEdicion.stock);
$("#etiquetaEdit").val(prodEdicion.etiqueta);
$("#descripcionEdit").val(prodEdicion.descripcion);

//Mostrar select con la categoria correcta ya selecionada
categorias.forEach(element => { 
    if(element.id == 9 || element.id == 4 || element.id == 3 || element.id == 2){ 
        if(element.id == prodEdicion.idCategoria){
            $("#categoriaSelected").val(prodEdicion.idCategoria)
            $("#categoriaSelected").html(element.nombre) 
        }else{
            $("#categoriaEdit").append(`<option value="${element.id}">${element.nombre}</option>`)
        }
    }
});

$("#sucursalEdit").val(prodEdicion.idSucursal);

$("#formEdicion").on("submit",event =>{
    event.preventDefault();
    let arrProdEdit = document.getElementsByClassName("datoEdit");
    console.log(arrProdEdit)
    let prod = new Producto(arrProdEdit.nombreEdit.value,parseInt(arrProdEdit.precioEdit.value),arrProdEdit.linkEdit.value,parseInt(arrProdEdit.stockEdit.value),arrProdEdit.etiquetaEdit.value,arrProdEdit.descripcionEdit.value,parseInt(arrProdEdit.categoriaEdit.value),parseInt(arrProdEdit.sucursalEdit.value))
    prod.setID(parseInt(id))
    catEdit.editarProducto(prod)
    window.close()
})



