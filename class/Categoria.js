export class Categoria{
    constructor() {}

    obtenerCategoria(){
        return fetch("https://bsite.net/metalflap/td-categoria")
        .then(response => response.json())
        .then(data => data)
       
}
}