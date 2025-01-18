let addedAmount = 0; // Total de dinero ingresado

// Función para insertar monedas
function insertCoin(amount) {
  addedAmount += amount;
  document.getElementById("addedAmount").textContent = addedAmount;
}

// Función para pedir una bebida
function addingSale(name, price) {
  if (addedAmount >= price) {
    const change = addedAmount - price;

    // Mostrar alerta de suministro de bebida
    alert(
      `${name}\n\nEnjoy your drink!\n お飲み物をお楽しみください！\nDisfruta tu bebida`
    );

    // Mostrar alerta de cambio si hay
    if (change > 0) {
      alert(
        `¥${change}\n\n Here is your change.\n お釣りはこちらです！\nAquí tienes el cambio`
      );
    }

    // Reiniciar el monto ingresado
    addedAmount = 0;
    document.getElementById("addedAmount").textContent = addedAmount;
  } else {
    // Mostrar alerta de falta de dinero
    alert(
      `\n\n Not enough money.\n日本語: お金が足りません！\nFondos insuficientes.`
    );
  }
}
