// Variables/constantes globales

// Referido a: formulario para ingresar producto
const elemInputNombre = document.getElementById("inputNombre");
const elemInputPrecio = document.getElementById("inputPrecio");
// Botón para agregar al carrito
const btnAgregarAlCarrito = document.getElementById("btnAgregarAlCarrito");
btnAgregarAlCarrito.addEventListener("click", agregarAlCarrito);

// Referido a: carrito de compras
const elemListaProductoCarritoDeCompras = document.getElementById("carrito-de-compras-lista");
const elemH2Calculo = document.getElementById("total-calculo");
elemH2Calculo.innerHTML = "$0";
// Botones
const btnEliminarUltimo = document.getElementById("btn-eliminar-ultimo");
btnEliminarUltimo.addEventListener("click", eliminarUltimo);
const btnEliminarTodos = document.getElementById("btn-eliminar-todos");
btnEliminarTodos.addEventListener("click", eliminarTodos);
const btnCalcularTotal = document.getElementById("btn-calcular-total");
btnCalcularTotal.addEventListener("click", calcularTotal);

// Funciones

// Referido a: formulario para ingresar producto

/* En caso de que el string tenga el símbolo $, esta función se lo quita
y lo pasa a number, y si no tiene el símbolo también lo pasa a number*/
function convertirElPrecioDeStringANumber(precioIngresado) {
  if (isNaN(precioIngresado.charAt(0))) {
    const precioIngresadoNumber = Number(precioIngresado.slice(1));
    return precioIngresadoNumber;
  } else {
    const precioIngresadoNumber = Number(precioIngresado);
    return precioIngresadoNumber;
  }
}
/* Función para agregar los productos ingresados por el usuario
a una lista en el carrito de compras */
function agregarAlCarrito() {
  // variables/constantes locales
  const nombreIngresado = elemInputNombre.value;
  const precioIngresado = elemInputPrecio.value;
  // por cada producto construyo un elemento li para luego agregarlo a la lista
  let elemListaProducto = document.createElement("li");
  elemListaProducto.innerHTML = nombreIngresado + " ";
  elemListaProducto.className = "productos";

  let elemSpanPrecio = document.createElement("span");
  elemSpanPrecio.innerHTML = "$" + convertirElPrecioDeStringANumber(precioIngresado);
  // asigno padres para cada uno de los elementos creados
  elemListaProducto.append(elemSpanPrecio);
  elemListaProductoCarritoDeCompras.append(elemListaProducto);
}

// Referido a: carrito de compras

function obtenerProductos() {
  let productos = document.getElementsByClassName("productos");
  return productos;
}

function eliminarUltimo() {
  obtenerProductos()[obtenerProductos().length - 1].remove();
}

function eliminarTodos() {
  for (let i = 0; i < obtenerProductos().length; i++) {
    obtenerProductos()[i].innerHTML = "";
  }
  elemH2Calculo.innerHTML = "$0";
}

function calcularTotal() {
  let total = 0;
  let preciosDeProductosEnLista = document.querySelectorAll("span");
  for (let i = 0; i < preciosDeProductosEnLista.length; i++) {
    let precioIngresado = preciosDeProductosEnLista[i].firstChild.data;
    total += convertirElPrecioDeStringANumber(precioIngresado);
  }
  elemH2Calculo.innerHTML = "$" + total;
}