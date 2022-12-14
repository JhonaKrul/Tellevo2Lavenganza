import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HomeService } from 'src/app/services/home.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario = []

  constructor(private servicio: HomeService, private router: Router, private fire: FirebaseService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
  }

 


 async registrar(email, pass){
  const user = this.fire.registrar(email.value, pass.value);
  if (user){

  }

}

 login(){
  console.log("entrar")
  this.router.navigate(['login'])
}

registro(){
  console.log("registro")
  this.router.navigate(['register'])
}

info(){
  console.log("info")
  this.router.navigate(['info'])
}

fail(){
  console.log("error")
  this.router.navigate(['error'])
}

logout(){
  this.fire.logout();
  this.router.navigate(['home'])
}

}
