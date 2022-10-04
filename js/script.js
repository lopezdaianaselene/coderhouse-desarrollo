
let producto;
let cantidad;
let precio;
producto = prompt("Ingrese un numero de producto del 1 al 5");
cantidad = prompt("Ingrese cantidad");

switch(parseInt(producto))
{
    case 1:
        precio = 20;
    break;
    case 2:
        precio = 50;
    break;
    case 3:
        precio = 100;
    break;
    case 4:
        precio = 160;
    break;
    case 5:
        precio = 200;
    break;
    default:
        precio = -1;
    break;
}

if (precio > 0)
{
    let total=0;

    for(let contador=0; contador < cantidad; contador++) 
    {
        total = total + precio;
    }

    console.log("El total de su carrito es: " + total);
}
else 
{
    console.log("Ingrese un producto valido");
}



