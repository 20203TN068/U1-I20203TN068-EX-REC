function Producto(nombre, precioUnitario, cantidad) {
  this.nombre = nombre;
  this.precioUnitario = precioUnitario;
  this.cantidad = cantidad;
}

Producto.prototype.calcularTotal = function() {
  return this.precioUnitario * this.cantidad;
}

function Carrito() {
  this.productos = [];
  this.subtotal = 0;
  this.folio = Math.random().toString(36).substring(2, 15);
}

Carrito.prototype.agregarProducto = function(producto) {
  this.productos.push(producto);
  this.subtotal += producto.calcularTotal();
}

Carrito.prototype.cerrarCarrito = function() {
  return this.subtotal * 1.16; 
}

let carrito = new Carrito();

function agregarProducto() {
  let nombre = document.getElementById('nombre').value;
  let precio = document.getElementById('precio').value;
  let cantidad = document.getElementById('cantidad').value;
  let producto = new Producto(nombre, precio, cantidad);
  carrito.agregarProducto(producto);
  document.getElementById('productos').innerHTML += '<p>' + nombre + ', ' + cantidad + 'x, ' + precio + ' cada uno</p>';
  document.getElementById('subtotal').innerHTML = carrito.subtotal;
}

function cerrarCarrito() {
  let total = carrito.cerrarCarrito();
  document.getElementById('total').innerHTML = total;
  document.getElementById('folio').innerHTML = carrito.folio;
}
