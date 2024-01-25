

//Hay que tratar de nunca usar any en los tipos de datos
//ASi que aqui entran los genericos
//Para los genericos se utilizan los <> y adentro es comun colocar la T como primer generico
export function whatsMyType<T>(argument: T): T {

    return argument;
}
//Para manejar los genericos de forma correcta se colokca el tipo de dato en donde se llama la funcion entre flechas <>
let amIString = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5, 6]);


console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
