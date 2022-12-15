import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router, private miau: Router, private lol: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
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

  cuerre(){
    console.log("uwu")
    this.router.navigate(['qr'])
  }

  cerrar(){
    this.router.navigate(['home'])
  }
}
