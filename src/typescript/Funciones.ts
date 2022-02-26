
function sumar (a:number,b:number): number{
return a +b;
}

const sumarFlecha = (a:number,b:number): number =>{
return a + b;
}

function multiplicar( numero: number, otroNumero?:number, base:number =2): number
return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: =>void(); 
    
}
}

function curar( personaje: PersonajeLOR, curarX: number): void{

personaje.pv += curarX;

console.log(personaje); 

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Allan Shots",
    pv:50
    mostarHp(){
        console.log("Punto de vida:", this.pv);
}

curar( nuevoPersonaje, 25);
nuevoPersonaje.mostarHp();
