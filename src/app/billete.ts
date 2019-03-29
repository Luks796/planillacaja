export class Billete {
    cantidad: number;
    valor: number;
    get total(): number {
        return this.cantidad * this.valor;
    }    
}