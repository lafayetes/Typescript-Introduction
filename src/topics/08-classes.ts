
// Esto es como un molde para manejar algo bajo esta estructura y esto es basicament un objeto
export class Person {
    //La forma que mas se utiliza para construir un constructor en la clase es asi:
    constructor(public name: string, public address: string = 'No Address') { }
}
// Aqui entendemos la parte de extender una clase que en pocas palabras es obtener las propiedades de la clase que extiende
// En este caso la clase Hero extiende de Person entonces yo puedo asignarle nuevas propiedades como alter ego, edad y nombre real y depaso tener las propiedades de la clase person
// export class Hero extends Person {
//     constructor(
//         public alterEgor:string,
//         public age:number,
//         public realName:string
//     ){
//         super(realName,'New York');
//     }
// }


//Ahora en este curso es mejor priorizar la composicion ante que la herencia puesto que hay un problema cuando hay varias clases que extienden de otros y otros y otros
export class Hero {
    //Esto es la composicion
    //Colocas el objeto que usaras y si este objeto cambiase se vera afectada unicamente el objeto que cambia y no por ejemplo esta clase que es hero

    constructor(
        public alterEgor: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        this.person = person;
    }
}

const person = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', person);
console.log(ironman);
