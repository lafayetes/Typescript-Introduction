//Asi se puede importar datos que estamos exportamos
import { Product, taxCalcutation } from "./06-function-destructuring";


const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100.0
    },
    {
        description: "Ipad",
        price: 250.0
    }

];

const [total, tax] = taxCalcutation({ products: shoppingCart, tax: 0.15 })

console.log('Total', total);
// LA IDEA ES QUE CUANDO SE EXPORTA ALGUNA OTRA CLASE DE TYPESCRIPT NO HAY QUE EJECUTAR CODIGO EN EL ARCHIVO QUE SE ESTA EXPORTANDO
console.log('Tax', tax);