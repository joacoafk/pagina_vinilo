document.addEventListener('DOMContentLoaded', () => {
  const productosContainer = document.getElementById('productos-container');

  fetch('./tienda.json') // Ruta al archivo JSON
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(productos => {
      displayProductos(productos);
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });

  function displayProductos(productos) {
    productosContainer.innerHTML = '';
 const row = document.createElement('div');
 row.classList.add('row');
 productos.forEach(producto => {
   const col = document.createElement('div');
   col.classList.add('col-lg-4', 'col-s-6', 'mb-4'); 
   col.innerHTML = `
     <div class="card h-100">
       <img src="${producto.imagen}" class="card-img-top" alt="imagen del producto">
       <div class="card-body">
         <h5 class="card-title">${producto.nombre}</h5>
         <p class="card-text">${producto.desc}</p>
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">${producto.artista}</li>
         <li class="list-group-item">Precio: $${producto.precio.toFixed(2)}</li>
       </ul>
       <div class="card-body">
         <a href="#" class="card-link btn btn-primary">Agregar al carrito</a>
       </div>
     </div>
   `;
   row.appendChild(col);
 });
 productosContainer.appendChild(row);
}});


