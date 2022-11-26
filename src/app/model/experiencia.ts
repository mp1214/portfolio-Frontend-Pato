export class Experiencia {
    id?:number;
    cargo: string;
    descripcion: string;
    empresa: string;
    esTrabajoActual: boolean;
    inicio: string;
    fin: string;
    imgE: string;

    constructor( cargo: string,descripcion: string,empresa: string,esTrabajoActual: boolean,
        inicio: string,fin: string,imgE: string){
            this.cargo = cargo;
            this.descripcion = descripcion;
            this.empresa = empresa;
            this.esTrabajoActual = esTrabajoActual;
            this.inicio = inicio;
            this.fin = fin;
            this.imgE = imgE;
    }
}
