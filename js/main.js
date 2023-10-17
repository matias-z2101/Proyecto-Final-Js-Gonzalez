const url = arrayProductos;

const containerNavbar = document.querySelector("#container-navbar");
const containerCards = document.querySelector("#container-cards");
const tituloSectionCarrito = document.querySelector("#titulo-section-carrito");
const containerProductos = document.querySelector("#container-productos");

function cargarProductos(){
    arrayProductos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="producto-data">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        containerProductos.append(div);
    })
}

cargarProductos();
