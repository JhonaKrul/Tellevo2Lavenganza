import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { HomeService } from '../services/home.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario : any;


  constructor(private fire: FirebaseService ,private servicio: HomeService, private router: Router) { }

  ngOnInit(){
    
  }

  ionViewWillEnter(){
    
  }

  validacion(){
    this.fire.obtenerUsuario().then(
      (res) =>{
      
      },
      (err) =>{

      }
    )
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


 

}
