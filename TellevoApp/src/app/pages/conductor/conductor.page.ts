import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Viajes } from 'src/app/services/viajes';
import { ViajesService } from 'src/app/services/viajes.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  viajes = []
  titulo = "Viajes"

  constructor(private router: Router, private servicio: ViajesService, private alerta: AlertController, private fire: FirebaseService) { }

  ngOnInit() {
    //this.viajes = this.servicio.obtenerViajes() 
  }

  ionViewWillEnter() {
    //this.viajes = this.servicio.obtenerViajes() 
  }

  obtenerViajes(){
    this.fire.getCollection<Viajes>('viajes').subscribe(
      (res) =>{
        this.viajes = res;
        console.log(res)
      },
      (err) =>{

      }
    )
  }

 cerrar(){
    this.fire.logout();
    this.router.navigate(['home'])
  }
 
  api(){
    console.log("api")
    this.router.navigate(['api'])
  }

  info(){
    console.log("info")
    this.router.navigate(['home/info'])
  }

  perfil(){
    console.log("perfil")
    this.router.navigate(['home/perfiles'])
  }

  conductor(){
    console.log("conductor")
    this.router.navigate(['home/conductor'])
  }

  Viajes(){
    console.log("viajes")
    this.router.navigate(['home/viajes'])
  }


 async presentAlert() {
  const alert = await this.alerta.create({
    header: 'Agregar Viaje',
    inputs: [
      {
        placeholder: 'Conductor',
        name: 'txtConductor'
      },
      {
        placeholder: 'Origen',
        name: 'txtOrigen'
      },
      {
        placeholder: 'Destino',
        name: 'txtDestino'
      },
      {
        placeholder: 'Vehiculo',
        name: 'txtVehiculo'
      },
      {
        placeholder: 'Patente',
        name: 'txtPatente'
      },
      {
        placeholder: 'Pasajeros',
        name: 'txtPasajeros'
      },
    ],
    buttons: [
      {
         text: 'Cancelar',
         role: 'cancel'
      },
      {
          text: 'Guardar',
          handler: data => {
            //this.servicio.agregarViaje(data.conductor, data.origen, data.destino, data.vehiculo, data.patente, data.pasajeros)
            const via : Viajes = {
              id: this.fire.getId(),
              conductor: data.txtConductor,
              origen: data.txtOrigen,
              destino: data.txtDestino,
              vehiculo: data.txtVehiculo,
              patente: data.txtPatente,
              pasajeros: data.txtPasajeros
            }
            
            this.fire.createDoc(via,'viajes',via.id)
            this.router.navigate(['viajes'])
            
          },
      },
    ],
    
  });

  await alert.present();
}


}
