/*let nombre = "adrian";
let hp: number = 95;
let estaVivo: boolean = true;


console.log (nombre, hp);



const nombre1 = "ken"
let nombre2 = 'adrian'
let nombre3 = `Hola mi nombre Es: ${nombre1} ` 
console.log( nombre3)

*/

let habilidades: string[] = ["Bash","Counter","healing"];


interface Personaje {
nombre: String;
hp: number;
habilidades:string []
puebloNatal?: string
}
interface Enemigo {
    nombre: String;
    hp: number;
    habilidades:string []
    puebloNatal?: string
    }

const personaje: Personaje = {    
nombre: "strider",
hp: 100,
habilidades: ["Bash","Counter","healing"]
}
const enemigo: Enemigo = {    
    nombre: "strider",
    hp: 100,
    habilidades: ["Bash","Counter","healing"]
    }

personaje.puebloNatal = "PuebloNatal";


console.table(personaje);
console.table(enemigo);





