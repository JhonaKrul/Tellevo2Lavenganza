import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descarga',
  templateUrl: './descarga.page.html',
  styleUrls: ['./descarga.page.scss'],
})

export class DescargaPage implements OnInit {
  
  constructor(private router: Router, private miau: Router, private lol: Router) { }


  
  ngOnInit() {
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
