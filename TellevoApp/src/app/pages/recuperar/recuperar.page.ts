import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
  }

  recuperar(){
    console.log("Recuperado papu")
    this.router.navigate(['login'])
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
