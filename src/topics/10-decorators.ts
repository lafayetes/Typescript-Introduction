
// Los decoradores no se usan mucho, es muy rebuscada su funcionalidad puesto que en los frameworks que se utilizan ya esta definido los decoradores
// Pero en resumen agrega las propiedades del decorador que primeraamente para aclarar un decorador no es mas que una funcion. dicho decorador te permite
// Agregar los datos o cosas que necesitas en otras clases como en angular para darle la funcionalidad de si es un servicio, un componente, un modulo etc

function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {

    return class extends constructor {
        newProperty = 'New property';
        hello = 'Override';
    }

}

@classDecorator
export class SuperClass {
    public myPropery: string = '123456abc';
    print() {
        console.log('Hola mundo');
    }
}

console.log(SuperClass);


const myClass = new SuperClass();

console.log(myClass);
// RESUMEN: LOS DECORADORES SON FUNCIONES QUE PERMITEN MODIFICAR EL COMPORTAMIENTO DE CLASES, PROPIEDADES Y METODOS