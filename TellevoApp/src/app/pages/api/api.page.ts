import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostServiceProvider } from 'src/app/services/post-services.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  constructor(private nav: NavController, private post: PostServiceProvider) { }

  arrayPosts:any;

  ngOnInit() {
    this.getPosts();
  }
  ionViewLoad() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.post.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }

}


