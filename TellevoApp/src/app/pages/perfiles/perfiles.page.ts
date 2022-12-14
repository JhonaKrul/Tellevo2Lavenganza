import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Viajes } from 'src/app/services/viajes';
import { ViajesService } from 'src/app/services/viajes.service';



@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {

  viajes = []
  titulo = "Viajes"

  constructor(private router: Router, private miau: Router, private lol: Router, private servicio: ViajesService, private alerta: AlertController, private fire: FirebaseService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
  }

  viaju(){
    console.log("papure")
    this.router.navigate(['viajes'])
  }

  mapas(){
    console.log("miau")
    this.miau.navigate(['mapa'])
  }

  perfile(){
    console.log("ola")
    this.lol.navigate(['perfiles'])
  }

  descarga(){
    console.log("nodigasesopapu:'v")
    this.lol.navigate(['descarga'])
  }

  api(){
    console.log("api")
    this.router.navigate(['api'])
  }

  info(){
    console.log("info")
    this.router.navigate(['info'])
  }

  cuerre(){
    console.log("uwu")
    this.router.navigate(['qr'])
  }

  cerrar(){
    this.router.navigate(['home'])
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
