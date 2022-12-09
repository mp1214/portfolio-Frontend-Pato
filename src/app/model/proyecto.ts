export class Proyecto {
    id?: number;
    proyecto:string;
    path:string;
    img: string;
    
    constructor(proyecto:string, path: string,img:string){
        this.proyecto=proyecto;
        this.img=img;
        this.path=path;
        

    }
}
