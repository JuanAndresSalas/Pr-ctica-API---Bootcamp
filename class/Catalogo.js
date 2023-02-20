export class Catalogo{
constructor(){}

  obtenerCatalogo(){
      return fetch("https://bsite.net/metalflap/td-producto")
      .then(response => response.json())
      .then(data => 
          data.filter(producto => producto.idSucursal == 2))
        
  }

  crearProducto(producto){
      fetch("https://bsite.net/metalflap/td-producto", 
      {
        method: 'POST', 
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
      }
      ) .catch((error) => {
      console.error('Error:', error);
    });
  }

  editarProducto(producto) {
    fetch(`https://bsite.net/metalflap/td-producto/${id}`, 
    {
      method: 'PUT', 
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    })
  }


  obtenerProducto(id){
    return fetch(`https://bsite.net/metalflap/td-producto/${id}`)
    .then(response => response.json())
    .then(data => 
        data.filter(producto => producto.idSucursal == 2))
      
  }

  eliminarProducto(id) {
      fetch(`https://bsite.net/metalflap/td-producto/${id}`, // comillas al reves = template string, para poner variables entre string
      {
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json' },
      })
  }

}