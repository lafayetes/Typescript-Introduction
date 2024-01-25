
//Para exportar alguna parte de codigo ya sea interfaz o funcion solo es necesario agregar antes de la interfaz la palabra export

export interface Product {
    description: string;
    price: number;
}


const phone: Product = {
    description: 'Xiaomi K40',
    price: 250.0
}


const tablet: Product = {
    description: 'Ipad Air',
    price: 550.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// Siempre es recomendable que si tienes mas de 3 datos en una funcion se maneje con un objeto
// function taxCalcutation(options: TaxCalculationOptions): number[] {

//     let total = 0;
//     options.products.forEach(product => {
//         total += product.price;
//     });

//     return [total, total * options.tax];
// }



// const shoppingCart = [phone, tablet];
// const tax = 0.15;
// // Cuando se maneja interfaces y se crea una variable con el mismo nombre de la interfaz se puede obviar el colocar los dos puntos como se ve en el siguiente ejemplo
// //const result = taxCalcutation({ products: shoppingCart, tax })
// const result = taxCalcutation({ products: shoppingCart, tax: tax, })

// console.log('Total', result[0]);
// console.log('Tax', result[1]);



// APLICANDO LA DESESTRUCTURACION COMO TAREA
//Otro detalle como buena pracia puede ser que si sabemos que el arreglo solo devuelve dos valores lo podemos especificar
export function taxCalcutation(options: TaxCalculationOptions): [number, number] {//Esa parte ayudaria a que si intento mandar otro valor mas de un error diciendo que solo se espera 2 
    const { tax, products } = options;
    let total = 0;
    // Aqui tuve un error. La mejor manera de desestructurar es asi, envolviendo el objeto en un parentesis y llaves y ahi especificando la propiedad que requerimos
    products.forEach(({ price }) => {

        total += price;
    });

    return [total, total * tax];
}



const shoppingCart = [phone, tablet];
const tax = 0.15;
// Cuando se maneja interfaces y se crea una variable con el mismo nombre de la interfaz se puede obviar el colocar los dos puntos como se ve en el siguiente ejemplo
//const result = taxCalcutation({ products: shoppingCart, tax })
const result = taxCalcutation({ products: shoppingCart, tax: tax, })
const [total = 'No se pudo calcular el total', newTax] = result;
console.log('Total', total);
console.log('Tax', newTax);

// export { };