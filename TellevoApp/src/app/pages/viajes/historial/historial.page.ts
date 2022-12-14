import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ViajesService } from 'src/app/services/viajes.service';
import { Viajes } from 'src/app/services/viajes';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  viajes = []
  titulo = "Viajes"

  constructor(private router: Router, private fire: FirebaseService, private servicio: ViajesService, private alerta: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
  }
 
  cerrar(){
    this.fire.logout();
    this.router.navigate(['home'])
  }


  info(){
    console.log("info")
    this.router.navigate(['info'])
  }

  perfil(){
    console.log("perfil")
    this.router.navigate(['perfiles'])
  }

  conductor(){
    console.log("conductor")
    this.router.navigate(['conductor'])
  }

  Viajes(){
    console.log("viajes")
    this.router.navigate(['viajes'])
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
