export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img:string;
    acerca_de_mi: string;
    fortaleza:string;
    debilidad:string;
    img_banner:string;
    tituloEfecto:string;

    constructor(nombre:string, apellido:string, img:string,acerca_de_mi:string,fortaleza:string,debilidad:string,img_banner:string,tituloEfecto:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
        this.acerca_de_mi= acerca_de_mi;
        this.fortaleza=fortaleza;
        this.debilidad=debilidad;
        this.img_banner=img_banner;
        this.tituloEfecto=tituloEfecto;
    }
}