
export class Cita {
    public _nombre: string;
    public _fecha: Date;
    public _hora: string;
    public _sintomas: string;

    constructor();
    constructor(nombre: string, fecha: Date, hora: string, sintomas: string);
    constructor(nombre?: string, fecha?: Date, hora?: string, sintomas?: string) {
        this._nombre = nombre || "";
        this._fecha = fecha || new Date();
        this._hora = hora || "";
        this._sintomas = sintomas || "";
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get fecha(): Date {
        return this._fecha;
    }

    set fecha(fecha: Date) {
        this._fecha = fecha;
    }

    get hora(): string {
        return this._hora;
    }

    set hora(hora: string) {
        this._hora = hora;
    }

    get sintomas(): string {
        return this._sintomas;
    }

    set sintomas(sintomas: string) {
        this._sintomas = sintomas;
    }
}