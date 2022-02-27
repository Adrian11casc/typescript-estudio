import { isCallExpression } from "typescript";

interface SuperHeroe {
    nombre: String;
    edad: number;
    direccion: {
    calle: string;
    pais: string;
    cuidad: string;
    },
    mostrarDirecion:()=> String;
    }
    
    const superHeroe: SuperHeroe = {
nombre: "Spiderman",
edad: 26,
direccion: {
    calle: "Mian St",
    pais: "USA",
    cuidad: "NY"
},
mostrarDirecion() {
    return this.nombre + ", " + this. direccion.cuidad + ", " + this. direccion.pais
}
}

const dirreción = superHeroe.mostrarDirecion();
console.log( dirreción);





