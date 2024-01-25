
//En una funcion siempre hay que especificar el tipo de dato incluso si es any
function addNumbers(a: number, b: number) {
    return a + b;
}

//Funcion de flecha
const addNumbersArrow = (a: number, b: number): string => {
    //Ya no es usual utilizar el metodo .toString()
    //return (a + b).toString();
    //Ahora se utiliza el backticks
    return `${a + b}`;

}

// Aqui definimos como se hace para manejar valores opciones o variables con valores por defecto 
// El orden recomendado es manejar primero los valores obligatorios, luego los opcionales y por ultimo los opcionales con un valor por defecto
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {

    return firstNumber * base;
}




// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);


//console.log({ result, result2, multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;// Asi se define una funcion en una interface
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;

}

const lafayetes: Character = {
    name: 'Lafayetes',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);

    },
}
healCharacter(lafayetes, 10);
healCharacter(lafayetes, 30);

lafayetes.showHp();





export { };