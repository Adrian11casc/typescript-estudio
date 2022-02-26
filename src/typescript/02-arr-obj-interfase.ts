/*const nombre1 = "ken"
let nombre2 = 'adrian'
let nombre3 = `Hola mi nombre Es: ${nombre1} `
console.log( nombre3)*/


let numString = "5";
let nunNumber = "11";
let numparseado;
let numparseado1;

/*console.log(numString, "/" , nunNumber);

console.log(`{1+1}`);

console.log(`El resultado: ${numString} / ${nunNumber} `);

numparseado = parseInt(numString);
numparseado1= parseInt(nunNumber);
console.log(numparseado + numparseado1);*/



//let habilidades: string[] = ["Bash","Counter","healing"];


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
nombre: "Adrián",
hp: 100,
habilidades: ["Bash","Counter","healing"]
}

const enemigo: Enemigo = {    
    nombre: "Kenneth",
    hp: 100,
    habilidades: ["Bash","Counter","healing"]
    }

personaje.puebloNatal = "PuebloNatal";



console.table(personaje);
console.table(enemigo);
