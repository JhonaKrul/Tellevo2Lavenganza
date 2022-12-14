import { Injectable } from '@angular/core';
import { Viajes } from './viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

 private viaje: Viajes []=[
   {
    id: '1',
    conductor: 'Zalo Reyes',
    origen: 'El ombu #88',
    destino: 'Av. Concha y Toro 1340 c/San Carlos',
    vehiculo: 'The homer',
    patente: 'MXLR89',
    pasajeros: '4'
   }
 ]

  constructor() { }

  obtenerViajes(){
    return [...this.viaje]
  }

  obtenerviaje(id: string){
    return{
      ...this.viaje.find(aux => {
        return aux.id === id 
      })
    }
  }

  agregarViaje(conductor: string, origen: string, destino: string, vehiculo: string, patente: string, pasajeros: string){
    this.viaje.push({
      conductor, origen, destino, vehiculo, patente, pasajeros, id: this.viaje.length + 1 + ""
    })
  }

  eliminarViaje(id:string){
    this.viaje = this.viaje.filter(aux => {
      return aux.id !== id
    })
  }


}
