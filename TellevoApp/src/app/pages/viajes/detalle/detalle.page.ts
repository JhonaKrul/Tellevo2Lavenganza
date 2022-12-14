import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ViajesService } from 'src/app/services/viajes.service';
import { Viajes } from 'src/app/services/viajes';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  viaje : Viajes
  idViaje : any

  constructor(private router: Router, private fire: FirebaseService, private servicio: ViajesService, private alerta: AlertController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.viaje = this.servicio.obtenerviaje(paramMap.get('id'))
      console.log(paramMap.get('id'))
      this.idViaje = paramMap.get('id')
    })
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

  async eliminar() {
    const alert = await this.alerta.create({
      header: 'Eliminar!',
      message: 'Estás seguro que deseas eliminar al personaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            //this.servicio.eliminarPersonaje(this.personaje.id)
            this.fire.deleteDoc('personajes',this.idViaje)
            this.router.navigate(['/personajes'])
          },
        },
      ],
    });
      
    
  
    await alert.present();
  }

}
