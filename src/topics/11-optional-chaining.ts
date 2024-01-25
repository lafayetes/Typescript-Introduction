


export interface Passenger {
    name: string;
    children?: string[];

}


const passenger1: Passenger = {
    name: 'Diego',

}

const passenger2: Passenger = {
    name: 'Daniela',
    children: ['Natalia', 'Elizabeth']

}

// Aqui muestro que es el optional chaining

const printChildren = (passenger: Passenger) => {
    //El optional chaining es basicamente el signo de interrogacion que pregunta si el valor es null o undefined no entre a lo que sigue que en este caso es el lenght
    // Y luego esta el simbolo || que lo que hace basicamente es decir si este valor es null o undefined asignale el valor que esta despues de estos simbolos
    const howManyChildren = passenger.children?.length || 0;
    // La contra parte de esto es cuando uno esta seguro que SIEMPRE llegara el valor deseado, en ese caso se le pone el signo de admiracion y eso basicamente
    // quiere decir confia en mi programa siempre va llegar el valor 
    // const howManyChildren = passenger.children!.length;  
    // ! es un nonull assertion exception
    // ? Es el optional chaining
    return howManyChildren;
}