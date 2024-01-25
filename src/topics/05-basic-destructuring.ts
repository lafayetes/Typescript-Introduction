interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 0,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New song'; // Aqui al manejar el mismo nombre que en la desestructuracion genera un error aqui hay que elegir cual sera el nombre que usenmos
// Esta es la desesctructuracion de objetos. Se elige los campos que se deesea poder utilizar para no repetir a cada rato el nombre del objeto con el punto y la propiedad
//const {song} = audioPlayer;
//Aqui modificaremos el nombre porque como tenemos dos que tienen el mismo nombre hay que asignarle uno nuevo
//Igualmente aqui se muestra la forma facil para desestructurar un objeto dentro de otro objeto pero no es la solucion optima
// const {
//     song: anotherSong,
//     songDuration: duration,
//     details:{author}
// } = audioPlayer;
//Esta es la mejor solucion para un codigo limpio
const {
    song: anotherSong,
    songDuration: duration,
    details
} = audioPlayer;

const { author } = details;

console.log('Song:', anotherSong);
console.log('Duration:', duration);
console.log('Author:', author);





//DESESTRUCTURACION DE OBJETOS


// COMO SE HACE SIN DESESTRUCTURACION

//const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

//console.log('Personaje 3:', dbz[2]);
//Para poner un valor por defecto en caso de que ese valor no exista se utiliza el operador or:\
// const trunks = dbz[3] || 'No hay personaje';
// console.log('Personaje 3:', trunks);
//console.log('Personaje 3:', dbz[3] || 'No hay ese personaje en la lista) ;

//ASI SE VERIA CON DESESTRUCTURAZION
// para eastablecer un valor ppor defecto se puede colocar un igual en el lugar
const [p1, p2, trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 3', trunks);
export { };