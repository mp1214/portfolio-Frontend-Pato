export class Proyecto {
    id?: number;
    proyecto:string;
    path:string;
    img: string;
    fecha:string;
    repositorio:string;
    
    constructor(proyecto:string, path: string,img:string,fecha:string,repositorio:string){
        this.proyecto=proyecto;
        this.img=img;
        this.path=path;
        this.fecha=fecha;
        this.repositorio=repositorio;

    }
}
