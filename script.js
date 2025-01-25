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


document.getElementById('payButton').addEventListener('click', function () {
  const total = parseFloat(document.getElementById('total').textContent); // Obtiene el total
  const paymentAmount = parseFloat(document.getElementById('paymentAmount').value); // Obtiene el monto ingresado

  if (isNaN(paymentAmount) || paymentAmount <= 0) {
    alert('Por favor, ingrese un monto válido.');
    return;
  }

  if (paymentAmount < total) {
    alert(`El monto ingresado ($${paymentAmount.toFixed(2)}) no cubre el total de $${total.toFixed(2)}.`);
  } else {
    alert(`Pago exitoso! Su cambio es $${(paymentAmount - total).toFixed(2)}.`);
    document.getElementById('sale').innerHTML = ''; // Vacía la lista de pedidos
    document.getElementById('total').textContent = '0'; // Reinicia el total
    document.getElementById('paymentAmount').value = ''; // Limpia el campo de monto
  }
});
