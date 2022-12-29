export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img:string;
    acercaDeMi: string;
    email:string;
    telefono:number;
    imgBanner:string;
    tituloEfecto:string;
    domicilio:string;

    constructor(nombre:string, apellido:string, img:string,acerca_de_mi:string,email:string,telefono:number,img_banner:string,tituloEfecto:string,direccion:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
        this.acercaDeMi= acerca_de_mi;
        this.email=email;
        this.telefono=telefono;
        this.imgBanner=img_banner;
        this.tituloEfecto=tituloEfecto;
        this.domicilio=direccion;
    }
}