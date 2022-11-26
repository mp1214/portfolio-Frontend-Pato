export class Educacion {
    id?: number;
    titulo: string;
    tipoeducacion:string;
    institucion:string ;
    icono: string ;
    inicio: string ;
    fin: string ;  

    constructor(titulo:string , tipoeducacion:string, institucion:string,  icono:string,  inicio:string, fin:string) {
        this.titulo = titulo;
        this.tipoeducacion = tipoeducacion;
        this.institucion = institucion;
        this.icono = icono;
        this.inicio = inicio;
        this.fin = fin;
    }
}