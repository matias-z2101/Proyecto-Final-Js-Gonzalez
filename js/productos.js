/*Se crea la clase Producto*/
class Producto{
    constructor(id,nombre,imagen,precio){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}



/*Se da origen a los productos de la tienda*/
producto1 = new Producto(1,"gritarra criolla","./image/guitarras/guitarra-criolla.jpg",374000);
producto2 = new Producto(2,"guitarra acustica","./image/guitarras/guitarra-acustica.jpg",210000);
producto3 = new Producto(3,"guitarra electroacustica","./image/guitarras/guitarra-electroacustica.jpg",498000);
producto4 = new Producto(4,"guitarra electrica","./image/guitarras/guitarra-electrica.jpg",471000);
producto5 = new Producto(5,"bajo marron","./image/bajos/bajo-marron.jpg",590000);
producto6 = new Producto(6,"bajo negro","./image/bajos/bajo-negro.jpg",780000);
producto7 = new Producto(7,"bateria electrica","./image/baterias/bateria-electrica.jpg",810000);
producto8 = new Producto(8,"bateria standar","./image/baterias/bateria-standar.jpg",630000);
producto9 = new Producto(9,"teclado","./image/teclado-piano/teclado.jpg",340000);
producto10 = new Producto(10,"piano","./image/teclado-piano/piano.jpg",1110000);

const arrayProductos = new Array();

/*Se crea una funcion para ahorrar lineas de codigo al pushear todos los productos al array (arrayProductos)*/
function productosAlArray(arrayProductos, ...producto) {
    arrayProductos.push(...producto);
}

productosAlArray(arrayProductos,producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10);

console.log(arrayProductos)