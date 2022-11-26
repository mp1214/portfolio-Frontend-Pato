export class Habilidad {
    id?: number;
    habilidad:string;
    porcentaje: number;
    icono: string;
    constructor(habilidad:string,porcentaje:number,icono:string){
        this.habilidad=habilidad;
        this.porcentaje=porcentaje;
        this.icono=icono;

    }
}
