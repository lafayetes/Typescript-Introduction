
const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name:String;
    hp:Number;
    skills:string[];
    hometown?:string; // colocar el signo de interrogacion te permite poner si tendra un valor o sera undefined
}


const lafayetes:Character = {
    name: 'Lafayetes',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown:'Bolivia'
}

lafayetes.hometown = 'La Paz, Bolivia';

console.table(lafayetes);


export { };