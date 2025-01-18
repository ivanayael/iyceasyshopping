let sale = [];
let total = 0;

function addingSale(name, price) {
  // Agregar el producto al carrito
  sale.push({ name, price });
  
  // Actualizar el carrito en la interfaz
  updateSale();
}

function updateSale() {
  const listSale = document.getElementById('sale');
  const totalSpan = document.getElementById('total');

  // Limpiar la lista del carrito
  listSale.innerHTML = '';

  // Recorrer el carrito y agregar los productos a la lista
  sale.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - $${product.price}`;
    listSale.appendChild(li);
  });

  // Actualizar el total
  total = sale.reduce((acc, sale) => acc + sale.price, 0);
  totalSpan.textContent = total;
}
