import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/compat';
import { Cliente } from 'src/app/services/cliente';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HomeService } from 'src/app/services/home.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{ 


  langs: string[] = [];
  user = null;
  mensaje: string

  constructor(private translateService: TranslateService, private fire: FirebaseService ,private servicio: HomeService, private router: Router, private route: ActivatedRoute,  private alerta: AlertController, private auth: AngularFireAuth ) { 
    this.langs = this.translateService.getLangs();
    this.auth.authState.subscribe((user) =>{
    this.user = user? user: null;
 });
   

  }
  
  changeLang(event) {
    this.translateService.use(event.detail.value);
    console.log(event.detail.value)
  }

  ngOnInit() {
  }


  ionViewWillEnter(){
    
  }
 
  async login(email,pass){
    const user = this.fire.login(email.value,pass.value);
    if (user) {
      this.router.navigate(['/mapa'])
    } else {
      console.log("papure")
      const uwu = await this.alerta.create({
        header: 'Error',
        subHeader: 'Credenciales incorrectas',
        message: 'Por favor verifique que los datos ingresados sean correctos',
        buttons: ['OK'],
      });
  
      await uwu.present();
    }
   }
  
 registro(){
  this.router.navigate(['register'])
 }

 recuperar(){
  this.router.navigate(['recuperar'])
 }


  google(){
 const user = this.fire.googleSignIn();

}

github(){
  const user = this.fire.github();
}

info(){
  console.log("info")
  this.router.navigate(['info'])
}

fail(){
  console.log("error")
  this.router.navigate(['error'])
}



}
