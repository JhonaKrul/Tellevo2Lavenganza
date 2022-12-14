import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ViajesService } from 'src/app/services/viajes.service';
import { Viajes } from 'src/app/services/viajes';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  viajes = []
  titulo = "Viajes"
  viaje : Viajes
  usuario : any


  constructor(private router: Router, private miau: Router, private lol: Router, private fire: FirebaseService, private servicio: ViajesService, private alerta: AlertController) { }

  ngOnInit() {
    this.validacion()
  }

  ionViewWillEnter(){
    this.validacion()
  }

  validacion(){
    this.fire.obtenerUsuario().then(
      (res) =>{
        this.obtenerViajes();
        this.usuario = res.email;
      },
      (err) =>{

      }
    )
  }


  logout(){
    this.fire.logout();
    this.router.navigate(['home'])
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
              
              this.fire.cargarLoading("Almacenando viaje...")
              this.fire.createDoc(via,'viajes',via.id).then(
                (res) =>{
                  this.fire.cerrarLoading()
                  this.fire.mensaje("Viaje creado con exito")
                }
              )
              
              
              this.router.navigate(['viajes'])
              
            },
        },
      ],
      
    });
  
    await alert.present();
  }

 async eliminar(id: string) {

    const alert = await this.alerta.create({
      header: 'eliminar',
      message: 'Estas seguro que deseas eliminar esta asignatura?',
      buttons: [{
        text: 'cancelar',
        role: 'canel',
      },
      {
        text: 'Eliminar',
        handler: () => {
          this.fire.deleteDoc('viajes', id)
          this.router.navigate(['/viajes'])

        }
      }
      ]

    });

    await alert.present();

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
}
