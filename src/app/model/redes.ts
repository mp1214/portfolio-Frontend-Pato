export class Redes {
    id?:number;
    nombre: string;
    imagen: string;
    path: string;
   
    constructor(nombre:string , imagen:string,path:string){
        this.nombre = nombre;
        this.imagen= imagen;
        this.path=path;
}
}
