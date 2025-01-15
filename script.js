let pedido = [];
let total = 0;

function agregarAlPedido(nombre, precio) {
  // Agregar el producto al carrito
  pedido.push({ nombre, precio });
  
  // Actualizar el carrito en la interfaz
  actualizarPedido();
}

function actualizarPedido() {
  const listaPedido = document.getElementById('listaPedido');
  const totalSpan = document.getElementById('total');

  // Limpiar la lista del carrito
  listaPedido.innerHTML = '';

  // Recorrer el carrito y agregar los productos a la lista
  pedido.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    listaPedido.appendChild(li);
  });

  // Actualizar el total
  total = pedido.reduce((acc, producto) => acc + producto.precio, 0);
  totalSpan.textContent = total;
}
