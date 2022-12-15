import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner'
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  qrString = 'sabias que el 32% de la salchicha es sal? el resto es chicha uwu';
  scannedResult: any;
  content_visibility = '';  

  constructor(private router: Router, private miau: Router, private lol: Router) { }

  async checkPermission() {
    try {
      //check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        //the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission(); 
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult)
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

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

