import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService, private router: Router, private platform: Platform) {
    this.translateService.setDefaultLang('es');
	  this.translateService.addLangs(['en','fr']);
    this.initializeApp();
  }

initializeApp(){
  this.platform.ready().then( () => {
    this.router.navigateByUrl('splashscreen')
  });
}


}
