export class Clima{
    public temperatura:number
    public viento:number
    public precipitaciones:number

constructor(temperatura:number, viento:number, precipitaciones:number){
        this.temperatura=temperatura;
        this.viento=viento;
        this.precipitaciones=precipitaciones;
    }
    
    public getTemperatura(): number {
        return this.temperatura;
    }

    public setTemperatura(temperatura: number): void {
        this.temperatura = temperatura;
    }

    public getViento(): number {
        return this.viento;
    }

    public setViento(viento: number): void {
        this.viento = viento;
    }

    public getPrecipitaciones(): number {
        return this.precipitaciones;
    }

    public setPrecipitaciones(precipitaciones: number): void {
        this.precipitaciones = precipitaciones;
    }


    
    
}